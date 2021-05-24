import 'dart:math';
import 'package:flutter/material.dart';

void main() => runApp(
      MaterialApp(
        home: Scaffold(
          backgroundColor: Colors.deepPurple,
          appBar: AppBar(
            title: Text('Madame Irma Ball'),
            backgroundColor: Colors.deepPurpleAccent,
          ),
          body: MagicBall(),
        ),
      ),
    );

class MagicBall extends StatefulWidget {
  @override
  _MagicBallState createState() => _MagicBallState();
}

class _MagicBallState extends State<MagicBall> {
  int prediction = 1;

  @override
  Widget build(BuildContext context) {
    return Center(
      child: TextButton(
        onPressed: () {
          setState(() {
            prediction = Random().nextInt(5) + 1;
          });
        },
        child: Image.asset('images/ball$prediction.png'),
      ),
    );
  }
}
