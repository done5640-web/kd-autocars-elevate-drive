export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      cars: {
        Row: {
          id: string
          created_at: string
          name: string
          brand: string
          image_url: string
          price_per_day: number | null
          sale_price: number | null
          year: number
          mileage: string
          fuel: string
          transmission: string
          power: string
          engine: string
          type: 'rent' | 'sale'
          featured: boolean
          specs: string[] | null
        }
        Insert: {
          id?: string
          created_at?: string
          name: string
          brand: string
          image_url: string
          price_per_day?: number | null
          sale_price?: number | null
          year: number
          mileage: string
          fuel: string
          transmission: string
          power: string
          engine: string
          type: 'rent' | 'sale'
          featured?: boolean
          specs?: string[] | null
        }
        Update: {
          id?: string
          created_at?: string
          name?: string
          brand?: string
          image_url?: string
          price_per_day?: number | null
          sale_price?: number | null
          year?: number
          mileage?: string
          fuel?: string
          transmission?: string
          power?: string
          engine?: string
          type?: 'rent' | 'sale'
          featured?: boolean
          specs?: string[] | null
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
}
