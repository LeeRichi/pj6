"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
// const getBusiness = async(maxResults, resultFrom, streetAddressPostCode) =>
// {
//     const result = await axios.get(`http://avoindata.prh.fi/bis/v1${}`) 
//     console.log(result)
// }
const getBusinessById = (businessId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield axios_1.default.get(`http://avoindata.prh.fi/bis/v1${businessId}`);
    console.log(result.data);
    return result;
});
getBusinessById('3361250-5');
// getBusinessById('3361250-5')
// getBusiness(13, 0, '40100')
