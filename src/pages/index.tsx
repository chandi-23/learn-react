// import Head from 'next/head'
// import Image from 'next/image'
// import { Inter } from 'next/font/google'
// import styles from '@/styles/Home.module.css'

import Gallery from './qcomps/gallery_props'
import RecipeList from './qcomps/recipes'
import List from './qcomps/list_keys_id'

export default function Home() {
  return (
    <div>
      <Gallery />
      <List/>
      <RecipeList/>
    </div>
    
  )
}
