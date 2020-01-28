import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from './student';
import { Stat } from './monthlystat';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor() { }

  getData():Student[] {
    var list:Student[] = [{
      _id: "rivasid",
      name: "Jonathan Rivas",
      monthsPaid: "2",
      amountPaid: "1000",
      monthsToPay: "3",
      amountToPay: "1500",
      lastMonthPaid: "September",monthsLeft: "12"
    },
    {
      _id: "rivasid",
      name: "Jonathan Rivas",
      monthsPaid: "2",
      amountPaid: "1000",
      monthsToPay: "3",
      amountToPay: "1500",
      lastMonthPaid: "September",monthsLeft: "12"
    },
    {
      _id: "rivasid",
      name: "Jonathan Rivas",
      monthsPaid: "2",
      amountPaid: "1000",
      monthsToPay: "3",
      amountToPay: "1500",
      lastMonthPaid: "September",monthsLeft: "12"
    },
    {
      _id: "rivasid",
      name: "Jonathan Rivas",
      monthsPaid: "2",
      amountPaid: "1000",
      monthsToPay: "3",
      amountToPay: "1500",
      lastMonthPaid: "September",monthsLeft: "12"
    }
    ,{
      _id: "rivasid",
      name: "Jonathan Rivas",
      monthsPaid: "2",
      amountPaid: "1000",
      monthsToPay: "3",
      amountToPay: "1500",
      lastMonthPaid: "September",monthsLeft: "12"
    }
    ,{
      _id: "rivasid",
      name: "Jonathan Rivas",
      monthsPaid: "2",
      amountPaid: "1000",
      monthsToPay: "3",
      amountToPay: "1500",
      lastMonthPaid: "September",monthsLeft: "12"
    }
    ,{
      _id: "rivasid",
      name: "Jonathan Rivas",
      monthsPaid: "2",
      amountPaid: "1000",
      monthsToPay: "3",
      amountToPay: "1500",
      lastMonthPaid: "September",monthsLeft: "12"
    }
    ,{
      _id: "rivasid",
      name: "Jonathan Rivas",
      monthsPaid: "2",
      amountPaid: "1000",
      monthsToPay: "3",
      amountToPay: "1500",
      lastMonthPaid: "September",monthsLeft: "12"
    }
    ,{
      _id: "rivasid",
      name: "Jonathan Rivas",
      monthsPaid: "2",
      amountPaid: "1000",
      monthsToPay: "3",
      amountToPay: "1500",
      lastMonthPaid: "September",monthsLeft: "12"
    },{
      _id: "rivasid",
      name: "Jonathan Rivas",
      monthsPaid: "2",
      amountPaid: "1000",
      monthsToPay: "3",
      amountToPay: "1500",
      lastMonthPaid: "September",monthsLeft: "12"
    }

  ]
    return list;
  }

  getMonthlyStat():Stat[] {
    var months: Stat[] = [
      {
      month: "January",
      numOfStudWhoPaid: "213",
      numOfStudWhoDdntPay: "234",
      totalAmountRec: "10234",
      totalAmountToRec: "1023423"
    },
    {
      month: "January",
      numOfStudWhoPaid: "213",
      numOfStudWhoDdntPay: "234",
      totalAmountRec: "10234",
      totalAmountToRec: "1023423"
    },
    {
      month: "January",
      numOfStudWhoPaid: "213",
      numOfStudWhoDdntPay: "234",
      totalAmountRec: "10234",
      totalAmountToRec: "1023423"
    },
    {
      month: "January",
      numOfStudWhoPaid: "213",
      numOfStudWhoDdntPay: "234",
      totalAmountRec: "10234",
      totalAmountToRec: "1023423"
    },
    {
      month: "January",
      numOfStudWhoPaid: "213",
      numOfStudWhoDdntPay: "234",
      totalAmountRec: "10234",
      totalAmountToRec: "1023423"
    },
    {
      month: "January",
      numOfStudWhoPaid: "213",
      numOfStudWhoDdntPay: "234",
      totalAmountRec: "10234",
      totalAmountToRec: "1023423"
    },
    {
      month: "January",
      numOfStudWhoPaid: "213",
      numOfStudWhoDdntPay: "234",
      totalAmountRec: "10234",
      totalAmountToRec: "1023423"
    },{
      month: "January",
      numOfStudWhoPaid: "213",
      numOfStudWhoDdntPay: "234",
      totalAmountRec: "10234",
      totalAmountToRec: "1023423"
    },

  ]
    return months;
  }

  getAnualStat():Stat[] {
    var year: Stat[] = [
      {
      month: "2017",
      numOfStudWhoPaid: "213",
      numOfStudWhoDdntPay: "234",
      totalAmountRec: "10234",
      totalAmountToRec: "1023423"
    },
    {
      month: "2018",
      numOfStudWhoPaid: "213",
      numOfStudWhoDdntPay: "234",
      totalAmountRec: "10234",
      totalAmountToRec: "1023423"
    },
    {
      month: "2019",
      numOfStudWhoPaid: "213",
      numOfStudWhoDdntPay: "234",
      totalAmountRec: "10234",
      totalAmountToRec: "1023423"}
    

  ]
    return year;
  }
}
