const url = '../samples/AsyncJavaScript.pdf'

let pdfDoc = null,
    pageNum = 1,
    pageIsRendering = false,
    pageNumIsPending = null;

    const scale = 2,
    canvas = document.querySelector('#pdf-render'),
    ctx = canvas.getContext('2d');

// render the page
const renderPage = num => {
    pageIsRendering = true;

    //get the page.... also with a promise !!!
    pdfDoc.getPage(num).then(page => {
        // set the scale
        const viewport = page.getViewport({scale});
        canvas.height = viewport.height;
        canvas.width = viewport.width;

        const renderCtx = {
            canvasContext: ctx,
            viewport
        }
        page.render(renderCtx).promise.then(() => {
            pageIsRendering = false;

            if (pageNumIsPending != null) {
                renderPage(pageNumIsPending);
                pageNumIsPending = null;
            }
        });
        // output current page
        document.querySelector('#page-num').textContent = num;
    })
}

// get the document... using Promise !!! 
pdfjsLib.getDocument(url).promise.then(pdfDoc_ => {
    pdfDoc = pdfDoc_;
    console.log(pdfDoc);

    document.querySelector('#page-count').textContent = pdfDoc.numPages;

    renderPage(pageNum)
});