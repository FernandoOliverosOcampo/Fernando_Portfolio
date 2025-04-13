import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://hqlzuquiyrarqwyeslkl.supabase.co"
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhxbHp1cXVpeXJhcnF3eWVzbGtsIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODkzNjgzNTQsImV4cCI6MjAwNDk0NDM1NH0.KUzztvyr0IqJ5DbaROfQyZ_klXMVGTxBd9fNSmYiFfg'

export const supabase = createClient(supabaseUrl, supabaseKey)