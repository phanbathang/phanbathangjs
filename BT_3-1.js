//cau 1
//so lon nhat
function solonnhat(mang) {
  var max = mang[0];
  for (let i = 1; i < mang.length; i++) {
    if (mang[i] > max) {
       max = mang[i];
    }
  }
  return max;
}

var mang = [1, 5, 3, 9, 2];
console.log(solonnhat(mang));
//so nho nhat
function sonhonhat(mang) {
  var min = mang[0];
  for (let i = 1; i < mang.length; i++) {
    if (mang[i] < min) {
      min = mang[i];
    }
  }
  return min;
}

var mang = [1, 5, 3, 9, 2];
console.log(sonhonhat(mang));
// rut gon
let mang = [1, 5, 3, 9, 2];1
var giaTriMax = Math.max(...mang);
var giaTriMin = Math.min(...mang);
console.log('Gia tri max : '+ giaTriMax)
console.log('Gia tri min : '+ giaTriMin)

// cau 2
function longname(name) {
  let ten = name.split(' ');
  let max = ten[0];

  for(let i = 0; i< ten.length; i++) {
      if(max < ten[i]) {
          max = ten[i];
      }
  }
  console.log(max);
}
longname('Phan Ba Thang');
// cách khác
function longname2(name) {
let ten = name.split(' ');
let max = ten[0];
name.trim().split(" ").forEach(element => {
  max <= element.length ? (ten = element , max = element.length) : ten = ten
});
console.log(ten);
}
longname2("Phan Ba Thang")

//câu 3
function daoNguocChuoi(chuoi) {
  return chuoi.split('').reverse().join('');
}

var chuoi = "ahc";
console.log(daoNguocChuoi(chuoi));

//câu 4
var sachs = [
    {
        tacgia: 'Harper Lee',
        tieuDe: 'To Kill a Mockingbird',
        namXuatBan: 2020,
        trangthai: true
    },

    {
        tacgia: 'Ray Bradbury',
        tieuDe: 'Fahrenheit 451',
        namXuatBan: 2022,
        trangthai: false
    }
]

sachs.forEach(function(sach) {
    console.log(sach.tacgia)
    console.log(sach.tieuDe)
    console.log(sach.namXuatBan)
    console.log(sach.trangthai)
});
// cách khác
for (i in sachs) {
    console.log (
        `${i} Tacgia: ${sachs[i].tacgia}
              Tieude: ${sachs[i].tieuDe}
              Namxuatban: ${sachs[i].namXuatBan}
              Trangthai: ${sachs[i].trangthai}
        `);
}


