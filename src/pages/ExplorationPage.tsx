import React, { useState } from 'react';
import { FileInput, Button, Loader, Paper, Text } from '@mantine/core';

const ExplorationPage: React.FC = () => {
    const [file, setFile] = useState<File | null>(null);
    const [reportUrl, setReportUrl] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleUpload = async () => {
        if (!file) return;
        setLoading(true);
        setError(null);

        try {
            const formData = new FormData();
            formData.append('file', file);

            const response = await fetch('http://localhost:8000/exploration/profile', {
                method: 'POST',
                headers: { Accept: 'application/pdf' },
                body: formData,
            });

            if (!response.ok) {
                throw new Error(`Upload failed: ${response.status}`);
            }

            const blob = await response.blob();
            const url = URL.createObjectURL(blob);
            setReportUrl(url);
        } catch (err: any) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <Paper p="md">
            <FileInput
                label="Upload CSV file"
                placeholder="Select a .csv file"
                accept=".csv"
                value={file}
                onChange={setFile}
            />

            <Button mt="md" onClick={handleUpload} disabled={!file || loading}>
                {loading ? <Loader size="xs" /> : 'Generate Report'}
            </Button>

            {error && <Text color="red" mt="sm">{error}</Text>}

            {reportUrl && (
                <Paper mt="md" style={{ height: 800, overflow: 'hidden' }}>
                    <iframe
                        src={reportUrl}
                        title="Pandas Profiling Report"
                        width="100%"
                        height="100%"
                        frameBorder="0"
                    />
                </Paper>
            )}
        </Paper>
    );
};

export default ExplorationPage;
