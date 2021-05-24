import 'package:flutter/material.dart';
import 'package:audioplayers/audio_cache.dart';

void main() => runApp(XylophoneApp());

class XylophoneApp extends StatelessWidget {
  void playSound(int soundNumber) {
    final player = AudioCache();
    player.play('note$soundNumber.wav');
  }

  Widget buildKey(int soundNumber, Color color, Color iconColor) {
    return Expanded(
      child: ElevatedButton(
        onPressed: () {
          playSound(soundNumber);
        },
        style: ElevatedButton.styleFrom(
          primary: color,
        ),
        child: Icon(
          Icons.audiotrack,
          color: iconColor,
          size: 50.0,
        ),
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(
          title: Text(
            'XYLOPHONE APP',
            style: TextStyle(
              fontSize: 20.0,
              color: Colors.white,
            ),
          ),
          backgroundColor: Colors.deepPurpleAccent,
        ),
        backgroundColor: Colors.indigo[400],
        body: SafeArea(
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.stretch,
            children: <Widget>[
              Padding(
                padding: const EdgeInsets.all(15.0),
                child: Text(
                  "Let's Play Music !",
                  style: TextStyle(
                    fontFamily: 'Pacifico',
                    fontSize: 40.0,
                    color: Colors.white,
                    fontWeight: FontWeight.bold,
                  ),
                ),
              ),
              buildKey(1, Colors.red, Colors.black),
              buildKey(2, Colors.orange, Colors.white),
              buildKey(3, Colors.yellow, Colors.black),
              buildKey(4, Colors.lime, Colors.white),
              buildKey(5, Colors.green, Colors.black),
              buildKey(6, Colors.blue, Colors.white),
              buildKey(7, Colors.blue[900], Colors.black),
            ],
          ),
        ),
      ),
    );
  }
}
