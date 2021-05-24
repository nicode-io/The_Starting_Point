//#regionTABLE OF CONTENT
/// ----------------
///
/// 1. IMPORTS
/// 2. APP LAUNCHER
/// 3. MAIN MATERIAL WIDGET
///
//#endregion

//#region 1. IMPORTS
import 'package:flutter/material.dart';
import 'screens/inputPage.dart';
//#endregion

//#region 2. APP LAUNCHER
void main() => runApp(BMICalculator());
//#endregion

//#region 3. MAIN MATERIAL WIDGET
class BMICalculator extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      theme: ThemeData.dark().copyWith(
        primaryColor: Color(0xFF0A0E21),
        scaffoldBackgroundColor: Color(0xFF0A0E21),
      ),
      // Manual Theme creation example
      // -----------------------------
      // theme: ThemeData(
      //   primaryColor: Color(0xFF0A0E21),
      //   accentColor: Colors.purple,
      //   scaffoldBackgroundColor: Color(0xFF0A0E21),
      //   textTheme: TextTheme(
      //     bodyText2: TextStyle(color: Colors.white),
      //   ),
      // ),
      home: InputPage(),
    );
  }
}
//#endregion
