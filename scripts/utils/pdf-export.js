export async function initSavePDFButton(selector) {
  const A4_WIDTH = 210;
  const A4_HEIGHT = 297;

  const btn = document.querySelector(selector);
  if (!btn) return;

  btn.addEventListener('click', async () => {
    try {
      const html2canvas = (await import('html2canvas')).default;
      const { jsPDF } = await import('jspdf');

      const element = document.getElementById('app');
      const fullHeight = element.scrollHeight;

      const originalStyles = {
        height: element.style.height,
        overflow: element.style.overflow,
      };
      element.style.height = `${fullHeight}px`;
      element.style.overflow = 'hidden';

      const canvas = await html2canvas(element, {
        scale: 2,
        logging: true,
        useCORS: true,
        allowTaint: true,
        windowHeight: fullHeight,
        backgroundColor: '#ffffff',
      });

      element.style.height = originalStyles.height;
      element.style.overflow = originalStyles.overflow;

      const pdf = new jsPDF('p', 'mm', 'a4');
      const imgData = canvas.toDataURL('image/png');
      const imgWidth = A4_WIDTH;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      const pageHeight = A4_HEIGHT;
      let position = 0;

      pdf.addImage(imgData, 'PNG', 0, -position, imgWidth, imgHeight);

      while (position + pageHeight < imgHeight) {
        position += pageHeight;
        pdf.addPage();
        pdf.addImage(imgData, 'PNG', 0, -position, imgWidth, imgHeight);
      }

      pdf.save('resume.pdf');
    }
    catch (error) {
      console.error('PDF Export Error:', error);
      alert(`PDF Export Failed: ${error.message}`);
    }
  });
}
