
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Product {
  id: number;
  name: string;
  price: number;
 
}

interface ProductState {
  products: Product[];
}

const initialState: ProductState = {
  products: [],
 
};

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
  
  },
});



export default productSlice.reducer;
