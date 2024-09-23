function functionDownload() {
    var format = this.value
    console.log(format)
    var li = canvas.toDataURL(`image/${format}`)
    var downloadLink = document.getElementById("download")
    downloadLink.href = li
    downloadLink.download = `downloadImage.${format}`;
}

var select = document.getElementById('format')
select.addEventListener('change',functionDownload)









