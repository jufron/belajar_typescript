

interface say {
  (nama: string, email: string) : string
}

const hallo: say = (nama: string, email: string) => {
  return `hallo nama saya ${nama} alamat email saya ${email}`;
};
