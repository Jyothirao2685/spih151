-- BioMindQ Supabase Schema

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Conversations
CREATE TABLE IF NOT EXISTS conversations (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    anonymous_device_id TEXT,
    title TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Messages
CREATE TABLE IF NOT EXISTS messages (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    conversation_id UUID REFERENCES conversations(id) ON DELETE CASCADE,
    role TEXT CHECK (role IN ('user', 'assistant', 'system')),
    content TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Evidence
CREATE TABLE IF NOT EXISTS evidence (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    conversation_id UUID REFERENCES conversations(id) ON DELETE CASCADE,
    message_id UUID REFERENCES messages(id) ON DELETE SET NULL,
    source TEXT CHECK (source IN ('pubmed', 'chembl')),
    source_id TEXT,
    title TEXT,
    content TEXT,
    url TEXT,
    metadata JSONB,
    relevance_score FLOAT,
    retrieved_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Answers
CREATE TABLE IF NOT EXISTS answers (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    conversation_id UUID REFERENCES conversations(id) ON DELETE CASCADE,
    message_id UUID REFERENCES messages(id) ON DELETE CASCADE,
    answer TEXT,
    evidence_level TEXT CHECK (evidence_level IN ('high', 'moderate', 'insufficient')),
    claims JSONB,
    sources JSONB,
    limitations JSONB,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Research Context
CREATE TABLE IF NOT EXISTS research_context (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    conversation_id UUID REFERENCES conversations(id) ON DELETE CASCADE,
    active_topic TEXT,
    entities JSONB,
    active_compounds JSONB,
    active_diseases JSONB,
    context_summary TEXT,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Compound Cache
CREATE TABLE IF NOT EXISTS compound_cache (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    chembl_id TEXT UNIQUE,
    name TEXT,
    formula TEXT,
    molecular_weight FLOAT,
    smiles TEXT,
    canonical_smiles TEXT,
    structure_data JSONB,
    targets JSONB,
    activities JSONB,
    raw_data JSONB,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
