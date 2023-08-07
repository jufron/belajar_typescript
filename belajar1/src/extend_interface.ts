

interface employee {
  id : string | number,
  nama : string,
  devisi : string
};

interface manager extends employee {
  numberOfEmploye : number;
};

interface frondEnd {
  namaFE : string
};

interface backEnd {
  namaBE : string
}

interface devOps {
  namaDO : string
}

interface databaseAdministrator {
  namaDA : string
}

interface qa {
  namaQA : string
}

interface programmer extends frondEnd {
  codding : string
}

interface programmer extends backEnd {

}

interface programmer extends devOps {

}

interface programmer extends databaseAdministrator {

}

interface programmer extends qa {

}


export { employee, manager, programmer, frondEnd, backEnd, devOps, databaseAdministrator, qa };