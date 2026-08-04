// =====================================
// PPT Compressor
// =====================================

const pptInput = document.getElementById("pptFile");
const qualitySelect = document.getElementById("quality");
const compressBtn = document.getElementById("compressBtn");
const downloadBtn = document.getElementById("downloadBtn");

const originalSize = document.getElementById("originalSize");
const compressedSize = document.getElementById("compressedSize");

let pptFile = null;

pptInput.addEventListener("change", () => {

    pptFile = pptInput.files[0];

    if (!pptFile) return;

    originalSize.textContent =
        (pptFile.size / 1024).toFixed(2) + " KB";

});

compressBtn.addEventListener("click", () => {

    if (!pptFile) {
        alert("Please upload a PPT or PPTX file.");
        return;
    }

    // Placeholder (real PPT compression will be added later)

    compressedSize.textContent =
        (pptFile.size / 1024).toFixed(2) + " KB";

    downloadBtn.disabled = false;

});

downloadBtn.addEventListener("click", () => {

    if (!pptFile) return;

    const link = document.createElement("a");

    link.href = URL.createObjectURL(pptFile);

    link.download = "compressed-presentation.pptx";

    link.click();

});
