// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://xvkrosavvzbrlgvlvmig.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh2a3Jvc2F2dnpicmxndmx2bWlnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQ3OTk3MjcsImV4cCI6MjA1MDM3NTcyN30.hXhFb_PZSH-V0hAWUsrkWSHzLQF9RXX06aYoakH91VQ";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);