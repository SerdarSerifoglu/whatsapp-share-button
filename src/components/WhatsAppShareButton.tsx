function getWhatsAppShareLink(url: string, text: string) {
  const encodedText = encodeURIComponent(text)
  return `https://api.whatsapp.com/send?text=${encodedText} ${url}`
}

const WhatsAppShareButton = ({ url, text }: { url: string; text: string }) => {
  const whatsappLink = getWhatsAppShareLink(url, text)

  return (
    <a
      style={{
        backgroundColor: '#00a884',
        padding: '20px',
        borderRadius: '20px',
        color: 'white',
      }}
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
    >
      WhatsApp'ta Paylaş
    </a>
  )
}

export default WhatsAppShareButton
