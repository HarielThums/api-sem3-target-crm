import React from "react";
import moment from "moment";

//DADOS FIXOS PARA RENDERIZAÇÃO DO FRONT ENQUANDO N TEM BACKEND
export const mockDeals = [
  {
    title: "Privatização",
    companyName: "coxinha",
    companyPicture:
      "https://media-exp1.licdn.com/dms/image/C560BAQFqVWwqk5C09Q/company-logo_200_200/0/1570541145129?e=2159024400&v=beta&t=V_YoQCobHzn9rQZgLOZ_PA5cm-uVuNKXfmtk7QdhXzs",
    contactName: "coxinha frita",
    budget: 247,
    startDate: moment().format("DD/MM/YYYY HH:MM"),
    tag: "hot",
    id: "teste2",
    pipe: "wonID",
  },
  {
    title: "teste venda",
    companyName: "kibe",
    companyPicture: "https://www.hypeness.com.br/1/2018/03/uber-8.png",
    contactName: "risole de presunto e queijo",
    budget: 257,
    startDate: moment().format("DD/MM/YYYY HH:MM"),
    tag: "cold",
    id: "teste3",
    pipe: "newid",
  },
  {
    title: "teste venda",
    companyName: "kibe",
    companyPicture: "https://www.hypeness.com.br/1/2018/03/uber-8.png",
    contactName: "risole de presunto e queijo",
    budget: 245,
    startDate: moment().format("DD/MM/YYYY HH:MM"),
    tag: "cold",
    id: "teste4",
    pipe: "greaterid",
  },
  {
    title: "teste venda",
    companyName: "kibe",
    companyPicture: "https://www.hypeness.com.br/1/2018/03/uber-8.png",
    contactName: "risole de presunto e queijo",
    budget: 457,
    startDate: moment().format("DD/MM/YYYY HH:MM"),
    tag: "cold",
    id: "teste7",
    pipe: "productid",
  },
  {
    title: "teste venda",
    companyName: "kibe",
    companyPicture: "https://www.hypeness.com.br/1/2018/03/uber-8.png",
    contactName: "risole de presunto e queijo",
    budget: 247,
    startDate: moment().format("DD/MM/YYYY HH:MM"),
    tag: "cold",
    id: "teste8",
    pipe: "productid",
  },
  {
    title: "teste venda",
    companyName: "kibe",
    companyPicture: "https://www.hypeness.com.br/1/2018/03/uber-8.png",
    contactName: "risole de presunto e queijo",
    budget: 457,
    startDate: moment().format("DD/MM/YYYY HH:MM"),
    tag: "warm",
    id: "teste9",
    pipe: "testeid",
  },
  {
    title: "teste venda",
    companyName: "kibe",
    companyPicture: "https://www.hypeness.com.br/1/2018/03/uber-8.png",
    contactName: "risole de presunto e queijo",
    budget: 24597,
    startDate: moment().format("DD/MM/YYYY HH:MM"),
    tag: "warm",
    id: "teste10",
    pipe: "lostid",
  },
  {
    title: "teste venda",
    companyName: "kibe",
    companyPicture: "https://www.hypeness.com.br/1/2018/03/uber-8.png",
    contactName: "risole de presunto e queijo",
    budget: 24757,
    startDate: moment().format("DD/MM/YYYY HH:MM"),
    tag: "cold",
    id: "teste11",
    pipe: "wonID",
  },
  {
    title: "teste venda",
    companyName: "kibe",
    companyPicture: "https://www.hypeness.com.br/1/2018/03/uber-8.png",
    contactName: "risole de presunto e queijo",
    budget: 2457,
    startDate: moment().format("DD/MM/YYYY HH:MM"),
    tag: "cold",
    id: "teste12",
    pipe: "lostid",
  },
];

export const oldMockPipes = [
  {
    title: "Won",
    _id: "wonID",
    totalColumnValue: 0,
  },
  {
    title: "Lost",
    _id: "lostid",
    totalColumnValue: 0,
  },
  {
    title: "Teste",
    _id: "testeid",
    totalColumnValue: 0,
  },
  {
    title: "Product",
    _id: "productid",
    totalColumnValue: 0,
  },
  {
    title: "New",
    _id: "newid",
    totalColumnValue: 0,
  },
  {
    title: "Greater",
    _id: "greaterid",
    totalColumnValue: 0,
  },
];

export const mockPipes = [
  {
    name: "Won",
    id: "wonID",
    totalColumnValue: 0,
  },
];

export const mockAddCard = {
  title: "teste venda",
  companyName: "kibe frito",
  companyPicture: "",
  contactName: "risole de presunto e queijo",
  budget: 2457,
  startDate: moment().format("DD/MM/YYYY HH:MM"),
  tag: "cold",
  id: "testeAdd123",
  pipe: "",
};
