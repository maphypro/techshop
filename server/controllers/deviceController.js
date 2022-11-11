const { Device, DeviceInfo } = require("../models/models");
const uuid = require("uuid");
const path = require("path");
const ApiError = require("../error/ApiError");

class DeviceController {
  async create(req, res, next) {
    try {
      let { name, price, brandId, typeId, info } = req.body;
      const { img } = req.files;
      let filename = uuid.v4() + ".jpg";
      await img.mv(path.resolve(__dirname, "..", "static", filename));

      const device = await Device.create({
        name,
        price,
        brandId,
        typeId,
        img: filename,
      });

      if (info) {
        info = JSON.parse(info);
        info.forEach((i) =>
          DeviceInfo.create({
            title: i.title,
            description: i.description,
            deviceId: device.id,
          })
        );
      }

      return res.json(device);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }

  async getAll(req, res) {
    let { brandsId, typesId, limit, page } = req.query;
    console.log(brandsId, typesId, limit, page);
    page = page || 1;
    limit = limit || 200;
    let offset = page * limit - limit;
    let devices;
    if (!brandsId && !typesId) {
      devices = await Device.findAndCountAll({ limit, offset });
    }
    if (!brandsId && typesId) {
      devices = await Device.findAndCountAll({
        where: { typeId: typesId },
        limit,
        offset,
      });
    }
    if (brandsId && !typesId) {
      devices = await Device.findAndCountAll({
        where: { brandId: brandsId },
        limit,
        offset,
      });
    }
    if (brandsId && typesId) {
      devices = await Device.findAndCountAll({
        where: { brandId: brandsId, typeId: typesId },
        limit,
        offset,
      });
    }
    return res.json(devices);
  }

  async getOne(req, res, next) {
    try {
      const { id } = req.params;
      console.log(id);

      const device = await Device.findOne({
        where: { id },
        include: [{ model: DeviceInfo, as: "info" }],
      });
      res.json(device);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }
}

module.exports = new DeviceController();
