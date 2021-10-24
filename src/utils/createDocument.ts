import DocumentPackage from "../models/DocumentPackage";
import createVersion from "./createVersion";

const createDocument=(id:string, name:string,title:string):DocumentPackage=>({
id,
title,
versions:[createVersion('1', name)] })
export default createDocument
