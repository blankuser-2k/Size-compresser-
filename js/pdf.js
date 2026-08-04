// =====================================
// PDF Compressor
// =====================================

const pdfInput = document.getElementById("pdfFile");
const qualitySelect = document.getElementById("quality");
const compressBtn = document.getElementById("compressBtn");
const downloadBtn = document.getElementById("downloadBtn");

const originalSize = document.getElementById("originalSize");
const compressedSize = document.getElementById("compressedSize");

let pdfFile = null;

pdfInput.addEventListener("change", () => {

    pdfFile = pdfInput.files[0];

    if (!pdfFile) return;

    originalSize.textContent =
        (pdfFile.size / 1024).toFixed(2) + " KB";

});

compressBtn.addEventListener("click", () => {

    if (!pdfFile) {
        alert("Please upload a PDF.");
        return;
    }

    // Placeholder (real PDF compression will be added later)

    compressedSize.textContent =
        (pdfFile.size / 1024).toFixed(2) + " KB";

    downloadBtn.disabled = false;

});

downloadBtn.addEventListener("click", () => {

    if (!pdfFile) return;

    const link = document.createElement("a");

    link.href = URL.createObjectURL(pdfFile);

    link.download = "compressed.pdf";

    link.click();

});
