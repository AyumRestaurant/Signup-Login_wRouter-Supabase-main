// src/supabaseClient.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://syapbambpuhuzsehpufw.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN5YXBiYW1icHVodXpzZWhwdWZ3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTcyNTIyNDQsImV4cCI6MjAzMjgyODI0NH0.ko9LSPm0rFwpypRShJcIT2JqTFTAGZ4Z5iH3rhK1Ylw';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
