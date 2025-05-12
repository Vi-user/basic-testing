// Uncomment the code below and write your tests
import {BankAccount, InsufficientFundsError, TransferFailedError} from '.';

const INIT_BALANCE = 100;
let newBankAcc = new BankAccount(INIT_BALANCE);

beforeEach(() => {
  newBankAcc = new BankAccount(INIT_BALANCE);
})

describe('BankAccount', () => {
  test('should create account with initial balance', () => {
    expect(newBankAcc.getBalance()).toBe(INIT_BALANCE);
  });

  test('should throw InsufficientFundsError error when withdrawing more than balance', () => {
    expect(() => newBankAcc.withdraw(INIT_BALANCE+1)).toThrow(InsufficientFundsError);
  });

  test('should throw error when transferring more than balance', () => {
    expect(() => newBankAcc
      .transfer(INIT_BALANCE+1, new BankAccount(INIT_BALANCE))).toThrow(InsufficientFundsError);
  });

  test('should throw error when transferring to the same account', () => {
    expect(() => newBankAcc.transfer(INIT_BALANCE, newBankAcc)).toThrow(TransferFailedError);
  });

  test('should deposit money', () => {
    const depNum = 55;
    expect(newBankAcc.deposit(depNum).getBalance()).toBe(INIT_BALANCE + depNum);
  });

  test('should withdraw money', () => {
    const amount = INIT_BALANCE-1;
    const newBalance = INIT_BALANCE - amount;
    expect(newBankAcc.withdraw(amount).getBalance())
      .toBe(newBalance);
  });

  test('should transfer money', () => {
    // Write your test here
  });

  test('fetchBalance should return number in case if request did not failed', async () => {
    // Write your tests here
    // const mockFetchBalance = jest.fn();
    // const mock = jest.fn().mockImplementation(() => {
    //   return
    // });


    // const mockFetchBalance = jest.fn().mockResolvedValue(5);
    // jest.spyOn(newBankAcc, 'fetchBalance').mockImplementation(mockFetchBalance);
    //
    // const res = await newBankAcc.fetchBalance();
    // expect(typeof res).toBe("number")

  });

  test('should set new balance if fetchBalance returned number', async () => {
    // Write your tests here
  });

  test('should throw SynchronizationFailedError if fetchBalance returned null', async () => {
    // Write your tests here
  });
});
