const layangForm = document.getElementById("layangForm");
const d1 = document.getElementById("d1");
const d2 = document.getElementById("d2");
const demoContainer = document.getElementById("demoContainer");

const hasilHitung = JSON.parse(localStorage.getItem("layangLayang")) || [];

const addLayang = (d1, d2, hasil) => {
    hasilHitung.push ({
        d1, 
        d2,
        hasil
    });

    localStorage.setItem("layangLayang", JSON.stringify(hasilHitung));

    return {d1, d2, hasil};
};

const createLayang = ({d1, d2, hasil}) => {
    const layangDiv = document.createElement("div");
    const d1Layang = document.createElement("p");
    const d2Layang = document.createElement("p");
    const hasilnya = document.createElement("h2");
    const hr = document.createElement("hr");

    d1Layang.innerHTML = "Nilai d1 : " + d1;
    d2Layang.innerHTML = "Nilai d2 : " + d2;
    hasilnya.innerHTML = "Hasilnya adalah : " + hasil;

    layangDiv.append(d1Layang, d2Layang, hasilnya, hr);
    demoContainer.appendChild(layangDiv);
};

hasilHitung.forEach(createLayang);

layangForm.onsubmit = e => {
    e.preventDefault();

    const vD1 = d1.value;
    const vD2 = d2.value;
    const luas = 1/2 * (vD1 *vD2);

    const newLayang = addLayang (vD1, vD2, luas);

    createLayang(newLayang);

    d1.value = "";
    d2.value = "";
}