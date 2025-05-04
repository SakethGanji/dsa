export type Dataset = {
    id: string;
    name: string;
    version: string;
    tags: string[];
    owner: string; // SOEID
    description: string;
    date: string; // required
    ingestionTimestamp?: string;
    lastUpdated?: string;
    fileSize?: number; // in bytes
    fileType?: string; // e.g. 'xlsx'
    data: Record<string, string | number | boolean>[];
};


const mockDatasets: Dataset[] = [
    {
        id: 'ds1',
        name: 'Call Transcriptions - Jan 2024',
        version: 'v1.0',
        tags: ['Calls', 'Transcripts', 'PII'],
        owner: 'aa10234',
        description: 'Daily transcriptions from call center interactions in January 2024.',
        date: '2024-02-01',
        fileType: 'json',
        fileSize: 154000,
        ingestionTimestamp: '2024-02-02T08:30:00Z',
        lastUpdated: '2024-02-03T09:00:00Z',
        data: [{ CallID: 'C1234', Transcript: 'Hello, I need help with my account' }],
    },
    {
        id: 'ds2',
        name: 'Prompt Tuning Logs',
        version: 'v2.1',
        tags: ['GenAI', 'LLM', 'Prompts'],
        owner: 'aa10234',
        description: 'Logs from tuning sessions of call summarization prompts for internal LLM.',
        date: '2024-03-10',
        fileType: 'csv',
        fileSize: 76000,
        data: [{ PromptID: 'P01', Accuracy: 0.89 }],
    },
    {
        id: 'ds3',
        name: 'LLM Evaluation Set - Q1',
        version: 'v1.2',
        tags: ['GenAI', 'LLM', 'Evaluation'],
        owner: 'aa10234',
        description: 'Evaluation dataset used to assess LLM response quality for customer queries.',
        date: '2024-03-28',
        fileType: 'xlsx',
        fileSize: 92000,
        data: [{ Question: 'How to reset password?', Score: 4.5 }],
    },
    {
        id: 'ds4',
        name: 'Call Intent Classification',
        version: 'v1.0',
        tags: ['AI', 'Labeling', 'Calls'],
        owner: 'aa10234',
        description: 'Labeled call data for training intent classification models.',
        date: '2024-01-12',
        fileType: 'json',
        fileSize: 103000,
        data: [{ CallID: 'C5678', Intent: 'Account_Balance' }],
    },
    {
        id: 'ds5',
        name: 'Compliance Redaction Rules',
        version: 'v3.0',
        tags: ['Compliance', 'PII', 'Redaction'],
        owner: 'cc45321',
        description: 'Redaction rule set used for masking sensitive data in call transcripts.',
        date: '2024-02-05',
        fileType: 'csv',
        fileSize: 32000,
        data: [{ Pattern: 'Account Number', Redact: true }],
    },
    {
        id: 'ds6',
        name: 'Prompt Variants Performance',
        version: 'v1.5',
        tags: ['LLM', 'Prompts', 'A/B Testing'],
        owner: 'aa10234',
        description: 'Performance metrics from multiple prompt variants tested on live calls.',
        date: '2024-04-01',
        fileType: 'xlsx',
        fileSize: 67000,
        data: [{ Variant: 'Prompt A', F1: 0.82 }],
    },
    {
        id: 'ds7',
        name: 'Customer Sentiment Labels',
        version: 'v1.0',
        tags: ['Sentiment', 'NLP', 'Calls'],
        owner: 'aa10234',
        description: 'Annotated customer sentiment extracted from call transcriptions.',
        date: '2024-01-25',
        fileType: 'json',
        fileSize: 54000,
        data: [{ CallID: 'C2345', Sentiment: 'Negative' }],
    },
    {
        id: 'ds8',
        name: 'Escalation Call Logs',
        version: 'v2.0',
        tags: ['Support', 'Escalation', 'Analytics'],
        owner: 'bb67890',
        description: 'Log of calls that were escalated to higher-tier support agents.',
        date: '2024-02-20',
        fileType: 'csv',
        fileSize: 88000,
        data: [{ CallID: 'C8888', Escalated: true }],
    },
    {
        id: 'ds9',
        name: 'LLM Fine-tuning Dataset',
        version: 'v1.3',
        tags: ['GenAI', 'LLM', 'Tuning'],
        owner: 'aa10234',
        description: 'Dataset used to fine-tune internal LLMs on banking call dialogues.',
        date: '2024-03-15',
        fileType: 'json',
        fileSize: 140000,
        data: [{ Input: 'What is my balance?', Output: 'Please check your mobile app.' }],
    },
    {
        id: 'ds10',
        name: 'Call Volume by Channel',
        version: 'v1.0',
        tags: ['Analytics', 'Operations'],
        owner: 'cc45321',
        description: 'Daily call volumes split by IVR, live agent, and chatbot.',
        date: '2024-04-10',
        fileType: 'xlsx',
        fileSize: 39000,
        data: [{ Date: '2024-04-09', IVR: 3000, Agent: 1200, Chatbot: 2200 }],
    },
];


export default mockDatasets;
