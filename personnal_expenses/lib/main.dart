import 'package:flutter/material.dart';
import './widgets/transaction_list.dart';
import './widgets/new_transaction.dart';
import './models/transaction.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: 'Expenses Manager',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: MyHomePage(),
    );
  }
}

class MyHomePage extends StatefulWidget {
  // Pop the new transaction window
  @override
  _MyHomePageState createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  final List<Transaction> _userTransactions = [
    Transaction(
      id: '01',
      title: 'Old Jeans',
      amount: 49.99,
      date: DateTime.now(),
    ),
    Transaction(
      id: '02',
      title: 'Cursus',
      amount: 919.99,
      date: DateTime.now(),
    ),
    Transaction(
      id: '01',
      title: 'Old Jeans',
      amount: 49.99,
      date: DateTime.now(),
    ),
    Transaction(
      id: '02',
      title: 'Cursus',
      amount: 919.99,
      date: DateTime.now(),
    ),
    Transaction(
      id: '01',
      title: 'Old Jeans',
      amount: 49.99,
      date: DateTime.now(),
    ),
    Transaction(
      id: '02',
      title: 'Cursus',
      amount: 919.99,
      date: DateTime.now(),
    ),
    Transaction(
      id: '01',
      title: 'Old Jeans',
      amount: 49.99,
      date: DateTime.now(),
    ),
    Transaction(
      id: '02',
      title: 'Cursus',
      amount: 919.99,
      date: DateTime.now(),
    ),
    Transaction(
      id: '01',
      title: 'Old Jeans',
      amount: 49.99,
      date: DateTime.now(),
    ),
    Transaction(
      id: '02',
      title: 'Cursus',
      amount: 919.99,
      date: DateTime.now(),
    ),
    Transaction(
      id: '01',
      title: 'Old Jeans',
      amount: 49.99,
      date: DateTime.now(),
    ),
  ];

  void _addNewTransaction(String txTitle, double txAmount) {
    final newTx = Transaction(
        id: DateTime.now().toString(),
        title: txTitle,
        amount: txAmount,
        date: DateTime.now());

    setState(() {
      _userTransactions.add(newTx);
    });
  }

  void _startAddNewTransaction(BuildContext ctx) {
    showModalBottomSheet(
      context: ctx,
      builder: (_) {
        return NewTransaction(_addNewTransaction);
      },
    );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
          title: Text(
            'Expenses Manager',
            style: TextStyle(
              color: Colors.white,
            ),
          ),
          actions: [
            IconButton(
              icon: Icon(Icons.add),
              onPressed: () => _startAddNewTransaction(context),
            )
          ],
          backgroundColor: Colors.deepPurple),
      body: SafeArea(
        child: SingleChildScrollView(
          child: Column(
            children: [
              Container(
                width: double.infinity,
                child: Card(
                  color: Colors.deepPurple,
                  child: Center(
                    child: Text(
                      'CHART',
                      style: TextStyle(
                        color: Colors.white,
                        fontSize: 14,
                        fontWeight: FontWeight.bold,
                      ),
                    ),
                  ),
                  elevation: 5.0,
                ),
              ),
              TransactionList(_userTransactions),
            ],
          ),
        ),
      ),
      floatingActionButtonLocation: FloatingActionButtonLocation.centerFloat,
      floatingActionButton: FloatingActionButton(
        child: Icon(Icons.add),
        backgroundColor: Colors.deepPurple,
        onPressed: () => _startAddNewTransaction(context),
      ),
    );
  }
}
