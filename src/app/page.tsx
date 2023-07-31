import Image from 'next/image'
import styles from './page.module.css'
import WhatsAppShareButton from '@/components/WhatsAppShareButton'

export default function Home() {
  //WhatsApp'ta paylaşılacak URL
  const shareUrl = 'https://example.com'
  //WhatApp'ta paylaşılacak URL öncesindeki yazı
  const shareText = 'Merhaba, bu paylaşmak istediğim bağlantıyı görmelisin!'

  return (
    <main className={styles.main}>
      <WhatsAppShareButton url={shareUrl} text={shareText} />
    </main>
  )
}
