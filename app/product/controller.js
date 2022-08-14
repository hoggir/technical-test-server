const connection = require("../../config/mysql");
const axios = require("axios");

const index = (req, res) => {
  const { search } = req.query;
  let exec = {};
  if (search) {
    exec = {
      sql: "SELECT * FROM jenis_barang WHERE sub_jenis_barang LIKE ?",
      values: [`%${search}%`],
    };
  } else {
    exec = {
      sql: `SELECT aset_barang.id_aset_barang, jenis_barang.sub_jenis_barang, branch.sub_kota_branch,
jenis_barang.nama_jenis_barang, branch.kota_branch, aset_barang.query,
      aset_barang.bulan_pembelian, aset_barang.tahun_pembelian
      FROM aset_barang
      JOIN jenis_barang
      ON aset_barang.id_jenis_barang = jenis_barang.id_jenis_barang
      JOIN branch
      ON aset_barang.id_branch = branch.id_branch`,
    };
  }
  connection.query(exec, _response(res));
};

const getDataTiketBanten = (req, res) => {
  let exec = {};
  exec = {
    sql: `SELECT id, witel_name, COUNT(status_indicator_data) AS "open",
    DATE_FORMAT(created_at, '%Y-%m-%d') AS "tanggal"
    FROM measuring_indications
    WHERE created_at between '2022-06-15 00:00:00' AND '2022-06-22 00:00:00'
    AND witel_name = "BANTEN"
    AND status_indicator_data = "open"
    GROUP BY witel_name, CAST(created_at AS DATE)`,
  };
  connection.query(exec, _response(res));
};

const getDataTiketBekasi = (req, res) => {
  let exec = {};
  exec = {
    sql: `SELECT id, witel_name, COUNT(status_indicator_data) AS "open",
    DATE_FORMAT(created_at, '%Y-%m-%d') AS "tanggal"
    FROM measuring_indications
    WHERE created_at between '2022-06-15 00:00:00' AND '2022-06-22 00:00:00'
    AND witel_name = "BEKASI"
    AND status_indicator_data = "open"
    GROUP BY witel_name, CAST(created_at AS DATE)`,
  };
  connection.query(exec, _response(res));
};

const getDataTiketBogor = (req, res) => {
  let exec = {};
  exec = {
    sql: `SELECT id, witel_name, COUNT(status_indicator_data) AS "open",
    DATE_FORMAT(created_at, '%Y-%m-%d') AS "tanggal"
    FROM measuring_indications
    WHERE created_at between '2022-06-15 00:00:00' AND '2022-06-22 00:00:00'
    AND witel_name = "BOGOR"
    AND status_indicator_data = "open"
    GROUP BY witel_name, CAST(created_at AS DATE)`,
  };
  connection.query(exec, _response(res));
};

const getDataTiketJakbar = (req, res) => {
  let exec = {};
  exec = {
    sql: `SELECT id, witel_name, COUNT(status_indicator_data) AS "open",
    DATE_FORMAT(created_at, '%Y-%m-%d') AS "tanggal"
    FROM measuring_indications
    WHERE created_at between '2022-06-15 00:00:00' AND '2022-06-22 00:00:00'
    AND witel_name = "JAKBAR"
    AND status_indicator_data = "open"
    GROUP BY witel_name, CAST(created_at AS DATE)`,
  };
  connection.query(exec, _response(res));
};

const getDataTiketJakpus = (req, res) => {
  let exec = {};
  exec = {
    sql: `SELECT id, witel_name, COUNT(status_indicator_data) AS "open",
    DATE_FORMAT(created_at, '%Y-%m-%d') AS "tanggal"
    FROM measuring_indications
    WHERE created_at between '2022-06-15 00:00:00' AND '2022-06-22 00:00:00'
    AND witel_name = "JAKPUS"
    AND status_indicator_data = "open"
    GROUP BY witel_name, CAST(created_at AS DATE)`,
  };
  connection.query(exec, _response(res));
};

const getDataTiketJaksel = (req, res) => {
  let exec = {};
  exec = {
    sql: `SELECT id, witel_name, COUNT(status_indicator_data) AS "open",
    DATE_FORMAT(created_at, '%Y-%m-%d') AS "tanggal"
    FROM measuring_indications
    WHERE created_at between '2022-06-15 00:00:00' AND '2022-06-22 00:00:00'
    AND witel_name = "JAKSEL"
    AND status_indicator_data = "open"
    GROUP BY witel_name, CAST(created_at AS DATE)`,
  };
  connection.query(exec, _response(res));
};

const getDataTiketJakut = (req, res) => {
  let exec = {};
  exec = {
    sql: `SELECT id, witel_name, COUNT(status_indicator_data) AS "open",
    DATE_FORMAT(created_at, '%Y-%m-%d') AS "tanggal"
    FROM measuring_indications
    WHERE created_at between '2022-06-15 00:00:00' AND '2022-06-22 00:00:00'
    AND witel_name = "JAKUT"
    AND status_indicator_data = "open"
    GROUP BY witel_name, CAST(created_at AS DATE)`,
  };
  connection.query(exec, _response(res));
};

const getDataTiketJaktim = (req, res) => {
  let exec = {};
  exec = {
    sql: `SELECT id, witel_name, COUNT(status_indicator_data) AS "open",
    DATE_FORMAT(created_at, '%Y-%m-%d') AS "tanggal"
    FROM measuring_indications
    WHERE created_at between '2022-06-15 00:00:00' AND '2022-06-22 00:00:00'
    AND witel_name = "JAKTIM"
    AND status_indicator_data = "open"
    GROUP BY witel_name, CAST(created_at AS DATE)`,
  };
  connection.query(exec, _response(res));
};

const getDataTiketTangerang = (req, res) => {
  let exec = {};
  exec = {
    sql: `SELECT id, witel_name, COUNT(status_indicator_data) AS "open",
    DATE_FORMAT(created_at, '%Y-%m-%d') AS "tanggal"
    FROM measuring_indications
    WHERE created_at between '2022-06-15 00:00:00' AND '2022-06-22 00:00:00'
    AND witel_name = "TANGERANG"
    AND status_indicator_data = "open"
    GROUP BY witel_name, CAST(created_at AS DATE)`,
  };
  connection.query(exec, _response(res));
};

const getusers = async (req, res) => {
  try {
    const APIJSON = "https://jsonplaceholder.typicode.com/users";
    const users = await axios.get(APIJSON);
    res.send({
      status: "success",
      response: users.data,
    });
  } catch (err) {
    console.log(err);
  }
};

const getoneuser = async (req, res) => {
  try {
    const id_user = req.params.id;
    const APIJSON = `https://jsonplaceholder.typicode.com/users/${id_user}`;
    const user = await axios.get(APIJSON);
    res.send({
      status: "success",
      response: user.data,
    });
  } catch (err) {
    console.log(err);
  }
};

const storeuser = async (req, res) => {
  try {
    const APIJSON = "https://jsonplaceholder.typicode.com/users/";
    const payload = { ...req.body };
    let response = await axios.post(APIJSON, payload);
    res.send({
      status: "success",
      response: response.data,
    });
  } catch (err) {
    console.log(err);
  }
};

const updateuser = async (req, res) => {
  try {
    const id_user = req.params.id;
    const APIJSON = `https://jsonplaceholder.typicode.com/users/${id_user}`;
    const payload = { ...req.body };
    let response = await axios.patch(APIJSON, payload);
    console.log();
    res.send({
      status: "success",
      response: response.data,
    });
  } catch (err) {
    console.log(err);
  }
};

const deleteuser = async (req, res) => {
  try {
    const id_user = req.params.id;
    const APIJSON = `https://jsonplaceholder.typicode.com/users/${id_user}`;
    await axios.delete(APIJSON);
    res.send({
      status: true,
      message: "Berhasil hapus data!",
    });
  } catch (err) {
    console.log(err);
  }
};

const _response = (res) => {
  return (error, result) => {
    if (error) {
      res.send({
        status: "failed",
        response: error,
      });
    } else {
      res.send({
        status: "success",
        response: result,
      });
    }
  };
};

module.exports = {
  index,
  getusers,
  getoneuser,
  storeuser,
  updateuser,
  deleteuser,
  getDataTiketBanten,
  getDataTiketBekasi,
  getDataTiketBogor,
  getDataTiketJakbar,
  getDataTiketJakpus,
  getDataTiketJaksel,
  getDataTiketJakut,
  getDataTiketJaktim,
  getDataTiketTangerang,
};
