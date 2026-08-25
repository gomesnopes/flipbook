const supabaseUrl = 'https://zqjgimorpkzynytrhyde.supabase.co'; // Ganti dengan URL aslimu
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpxamdpbW9ycGt6eW55dHJoeWRlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzkwMzkyOTUsImV4cCI6MjA5NDYxNTI5NX0.LAbAMRLiu9XxiAxFvoSX9FhraFgXoCp0GkEZUlUhHow';     // Ganti dengan ANON KEY aslimu

// Kita simpan ke dalam window agar bisa diakses global oleh file HTML
window.supabaseClient = supabase.createClient(supabaseUrl, supabaseKey);
