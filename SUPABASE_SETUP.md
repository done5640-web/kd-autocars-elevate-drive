# KD Autocars - Supabase Setup Guide

This guide will help you set up Supabase for the KD Autocars application.

## Prerequisites

- A Supabase account (sign up at https://supabase.com)
- Node.js installed on your machine

## Step 1: Create a Supabase Project

1. Go to https://supabase.com and sign in
2. Click "New Project"
3. Fill in the project details:
   - **Name**: kd-autocars (or any name you prefer)
   - **Database Password**: Choose a strong password (save this!)
   - **Region**: Choose the closest region to Albania (e.g., Frankfurt)
4. Click "Create new project"
5. Wait for the project to be created (this takes about 2 minutes)

## Step 2: Set Up Environment Variables

1. In your Supabase project dashboard, go to **Settings** → **API**
2. Copy the following values:
   - **Project URL** (looks like: `https://xxxxxxxxxxxxx.supabase.co`)
   - **anon public** key (under "Project API keys")

3. Create a `.env` file in the root of your project:

```bash
VITE_SUPABASE_URL=your-project-url-here
VITE_SUPABASE_ANON_KEY=your-anon-key-here
```

Replace the values with your actual Supabase credentials.

## Step 3: Create the Database Table

1. In your Supabase dashboard, go to **SQL Editor**
2. Click "New query"
3. Copy and paste the following SQL:

```sql
-- Create cars table
CREATE TABLE cars (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
  name TEXT NOT NULL,
  brand TEXT NOT NULL,
  image_url TEXT NOT NULL,
  price_per_day DECIMAL(10, 2),
  sale_price DECIMAL(10, 2),
  year INTEGER NOT NULL,
  mileage TEXT NOT NULL,
  fuel TEXT NOT NULL,
  transmission TEXT NOT NULL,
  power TEXT NOT NULL,
  engine TEXT NOT NULL,
  type TEXT NOT NULL CHECK (type IN ('rent', 'sale')),
  featured BOOLEAN DEFAULT false,
  specs TEXT[]
);

-- Enable Row Level Security (RLS)
ALTER TABLE cars ENABLE ROW LEVEL SECURITY;

-- Create a policy that allows anyone to read cars
CREATE POLICY "Allow public read access" ON cars
  FOR SELECT
  USING (true);

-- Create a policy that allows authenticated users to insert cars
CREATE POLICY "Allow authenticated users to insert" ON cars
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

-- Create a policy that allows authenticated users to update cars
CREATE POLICY "Allow authenticated users to update" ON cars
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Create a policy that allows authenticated users to delete cars
CREATE POLICY "Allow authenticated users to delete" ON cars
  FOR DELETE
  TO authenticated
  USING (true);

-- Create an index on type for faster queries
CREATE INDEX cars_type_idx ON cars(type);

-- Create an index on featured for faster queries
CREATE INDEX cars_featured_idx ON cars(featured);
```

4. Click "Run" to execute the SQL

## Step 4: Set Up Storage for Car Images

1. In your Supabase dashboard, go to **Storage**
2. Click "Create a new bucket"
3. Name it: `car-images`
4. Make it **Public** (toggle the public option)
5. Click "Create bucket"

### Configure Storage Policies

1. Click on the `car-images` bucket
2. Go to "Policies"
3. Create the following policies:

**Policy 1: Public Read Access**
- Click "New policy"
- Select "Custom policy"
- Name: "Public read access"
- Policy command: SELECT
- Target roles: public
- USING expression: `true`
- Click "Review" then "Save"

**Policy 2: Authenticated Upload**
- Click "New policy"
- Select "Custom policy"
- Name: "Authenticated users can upload"
- Policy command: INSERT
- Target roles: authenticated
- WITH CHECK expression: `true`
- Click "Review" then "Save"

**Policy 3: Authenticated Delete**
- Click "New policy"
- Select "Custom policy"
- Name: "Authenticated users can delete"
- Policy command: DELETE
- Target roles: authenticated
- USING expression: `true`
- Click "Review" then "Save"

## Step 5: Create an Admin User

1. In your Supabase dashboard, go to **Authentication** → **Users**
2. Click "Add user" → "Create new user"
3. Enter:
   - **Email**: your-admin-email@example.com
   - **Password**: Choose a strong password
4. Click "Create user"

## Step 6: Install Dependencies and Run the App

```bash
# Install dependencies
npm install

# Start the development server
npm run dev
```

## Step 7: Test the Application

1. Navigate to `http://localhost:8080/login`
2. Log in with your admin credentials
3. You should be redirected to the admin dashboard
4. Try adding a new car:
   - Click "Shto Automjet"
   - Fill in all the details
   - Upload an image
   - Click "Shto"

## Step 8: Deploy to Vercel

Your Vercel deployment is already connected. You just need to add the environment variables:

1. Go to your Vercel project dashboard
2. Navigate to **Settings** → **Environment Variables**
3. Add the following variables:
   - `VITE_SUPABASE_URL` = your Supabase project URL
   - `VITE_SUPABASE_ANON_KEY` = your Supabase anon key
4. Redeploy your application

## Optional: Migrate Existing Data

If you want to add your current cars to the database, you can use the admin dashboard to manually add them, or run this SQL in the Supabase SQL Editor:

```sql
-- Example: Add a car for rent
INSERT INTO cars (name, brand, image_url, price_per_day, year, mileage, fuel, transmission, power, engine, type, featured)
VALUES (
  'Golf GTI',
  'Volkswagen',
  'https://your-image-url.com/golf.jpg',
  45.00,
  2021,
  '35,000 km',
  'Benzinë',
  'Automatik',
  '245 HP',
  '2.0 TSI',
  'rent',
  true
);

-- Example: Add a car for sale
INSERT INTO cars (name, brand, image_url, sale_price, year, mileage, fuel, transmission, power, engine, type, featured)
VALUES (
  'Passat B8',
  'Volkswagen',
  'https://your-image-url.com/passat.jpg',
  22500.00,
  2019,
  '65,000 km',
  'Diesel',
  'Automatik',
  '190 HP',
  '2.0 TDI',
  'sale',
  true
);
```

## Troubleshooting

### Error: "Missing Supabase environment variables"
- Make sure your `.env` file exists in the root directory
- Verify the variable names are exactly `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY`
- Restart your development server after adding environment variables

### Error: "Failed to fetch cars"
- Check your database table was created correctly
- Verify the RLS policies are set up properly
- Check your Supabase project URL is correct

### Error: "Failed to upload image"
- Verify the storage bucket `car-images` exists
- Check that the bucket is set to public
- Verify storage policies are configured correctly

### Cannot login to admin
- Make sure you created an admin user in Supabase Authentication
- Verify you're using the correct email and password
- Check browser console for any errors

## Support

If you encounter any issues:
1. Check the browser console for errors
2. Check the Supabase logs in your dashboard
3. Verify all environment variables are set correctly
4. Make sure the database table and storage bucket are created

## Security Notes

- Never commit your `.env` file to git (it's already in `.gitignore`)
- Keep your Supabase credentials secure
- The anon key is safe to use in the frontend as it's protected by Row Level Security
- Only authenticated users can add, edit, or delete cars
- Anyone can view the cars (as intended for a public website)
