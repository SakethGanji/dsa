import {
    Modal,
    TextInput,
    Textarea,
    MultiSelect,
    Button,
    Group,
    Box,
    Text,
    useMantineTheme,
} from '@mantine/core';
import { Dropzone } from '@mantine/dropzone';
import { useState } from 'react';
import { IconUpload, IconPhoto, IconX } from '@tabler/icons-react';

type Props = {
    opened: boolean;
    onClose: () => void;
    onSubmit: (data: FormData) => void;
    allTags: string[];
    ownerId: string;
};

export default function DatasetUploadModal({
                                               opened,
                                               onClose,
                                               onSubmit,
                                               allTags,
                                               ownerId,
                                           }: Props) {
    const theme = useMantineTheme();

    const [name, setName] = useState('');
    const [version, setVersion] = useState('');
    const [tags, setTags] = useState<string[]>([]);
    const [description, setDescription] = useState('');
    const [file, setFile] = useState<File | null>(null);

    const handleSubmit = () => {
        if (!name || !version || !tags.length || !description || !file) {
            alert('Please fill out all required fields and upload a file.');
            return;
        }

        const formData = new FormData();
        formData.append('name', name);
        formData.append('version', version);
        formData.append('tags', JSON.stringify(tags));
        formData.append('description', description);
        formData.append('owner', ownerId);
        formData.append('file', file);

        onSubmit(formData);
        onClose();
    };

    return (
        <Modal opened={opened} onClose={onClose} title="Upload New Dataset" size="lg">
            <Box>
                <TextInput
                    label="Dataset Name"
                    placeholder="e.g. Call Transcriptions - Jan 2024"
                    required
                    value={name}
                    onChange={(e) => setName(e.currentTarget.value)}
                    mb="sm"
                />
                <TextInput
                    label="Version"
                    placeholder="e.g. v1.0"
                    required
                    value={version}
                    onChange={(e) => setVersion(e.currentTarget.value)}
                    mb="sm"
                />
                <MultiSelect
                    label="Tags"
                    data={allTags}
                    placeholder="Add relevant tags"
                    value={tags}
                    onChange={setTags}
                    searchable
                    clearable
                    required
                    mb="sm"
                />
                <Textarea
                    label="Description"
                    placeholder="Brief description of the dataset"
                    required
                    minRows={3}
                    value={description}
                    onChange={(e) => setDescription(e.currentTarget.value)}
                    mb="md"
                />

                <Dropzone
                    onDrop={(files) => setFile(files[0])}
                    onReject={(files) => {
                        console.log('rejected', files);
                        setFile(null);
                    }}
                    maxSize={30 * 1024 ** 2}
                    styles={{
                        root: {
                            border: '2px dashed var(--mantine-color-dimmed)',
                            borderRadius: 'var(--mantine-radius-md)',
                            backgroundColor: 'var(--mantine-color-body)',
                            padding: 20,
                        },
                    }}
                >
                    <Group justify="center" gap="xl" mih={220} style={{ pointerEvents: 'none' }}>
                        <Dropzone.Accept>
                            <IconUpload size={52} color={theme.colors.blue[6]} stroke={1.5} />
                        </Dropzone.Accept>
                        <Dropzone.Reject>
                            <IconX size={52} color={theme.colors.red[6]} stroke={1.5} />
                        </Dropzone.Reject>
                        <Dropzone.Idle>
                            <IconPhoto size={52} color="var(--mantine-color-dimmed)" stroke={1.5} />
                        </Dropzone.Idle>

                        <div>
                            <Text size="xl" inline>
                                {file ? file.name : 'Drag file here or click to select'}
                            </Text>
                            <Text size="sm" c="dimmed" inline mt={7}>
                                We accept any file up to 30MB in size.
                            </Text>
                        </div>
                    </Group>
                </Dropzone>

                <Group justify="flex-end" mt="xl">
                    <Button variant="default" onClick={onClose}>
                        Cancel
                    </Button>
                    <Button onClick={handleSubmit}>Upload Dataset</Button>
                </Group>
            </Box>
        </Modal>
    );
}
