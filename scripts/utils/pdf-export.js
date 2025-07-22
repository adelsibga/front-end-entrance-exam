export async function initSavePDFButton(selector) {
  const btn = document.querySelector(selector)
  if (!btn) return

  btn.addEventListener('click', async () => {
    try {
      const html2canvas = (await import('html2canvas')).default
      const { jsPDF } = await import('jspdf')

      const element = document.getElementById('app')

      const canvas = await html2canvas(element, {
        scale: 2,
        logging: true, // Для отладки
        useCORS: true,
        allowTaint: true,
      })

      const pdf = new jsPDF('p', 'mm', 'a4')
      const imgData = canvas.toDataURL('image/png')
      const imgWidth = 210
      const imgHeight = (canvas.height * imgWidth) / canvas.width

      pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight)
      pdf.save('resume.pdf')

    }
    catch (error) {
      console.error('PDF Export Error:', error)
      alert(`PDF Export Failed: ${error.message}`)
    }
  })
}
