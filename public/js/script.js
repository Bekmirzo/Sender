const form = document.getElementById('myform');
const inputfile = document.getElementById('idmyfiles');
const progressbar = document.getElementById('progressbar');
const progres_persent = document.getElementById('progres_persent');
const totalkb_span = document.getElementById('totalkb_span');
const loadedkb_span = document.getElementById('loadedkb_span');

inputfile.onchange = (e) => {
    
    const filename = e.target.files[0].name;
    console.log(filename);

    let xhr = new XMLHttpRequest;
    xhr.open('POST', 'upload', true);

    xhr.upload.onprogress = ({loaded,total}) => {
        
        let loadedKB = Math.floor(loaded/1000);
        let totalKB = Math.floor(total/1000);

        console.log(e);

        let percent = Math.floor(loadedKB/totalKB * 100);

        console.log(percent);
        
        progressbar.value = percent;
        progres_persent.innerHTML = `${percent}%`;
        totalkb_span.innerHTML = `всего: ${totalKB/1000}Mb`;
        loadedkb_span.innerHTML = `загружено: ${loadedKB/1000}Mb`;
        

    };

    let formData = new FormData(form);
    xhr.send(formData);
};
