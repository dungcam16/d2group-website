// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://tqwmxpzfhoujzhwgvhbp.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRxd214cHpmaG91anpod2d2aGJwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg1ODEzMDAsImV4cCI6MjA2NDE1NzMwMH0.5nBrX5DGkvE6JHtyVYtCOJ4Bb7ZiKkFF3korjVRVGdI";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);