//#region TABLE OF CONTENT
/// ----------------
///
/// 1. Imports
/// 2. Color
/// 3. Size & Position
/// 4. Enum
/// 5. TextStyle
///
//#endregion

//#region 1. Imports
import 'package:flutter/material.dart';
//#endregion

//#region 2. Color
const kActiveCardColour = Color(0xFF1d1E33);
const kInactiveCardColour = Color(0xFF111328);
const kLabelTextColor = Color(0xFF8D8E98);
const kBottomContainerColor = Color(0xFFEB1555);
//#endregion

//#region 3. Size & Position
const kBottomContainerHeight = 80.0;
//#endregion

//#region 4. Enum
enum Gender { male, female, other }
//#endregion

//#region 5. TextStyle
const kLabelTextStyle = TextStyle(
  fontSize: 18.0,
  color: kLabelTextColor,
);

const kNumberTextStyle = TextStyle(
  fontSize: 50.0,
  fontWeight: FontWeight.w900,
);

const kLargeButtonTextStyle = TextStyle(
  fontSize: 25.0,
  fontWeight: FontWeight.bold,
);

const kTitleTextStyle = TextStyle(
  fontSize: 30.0,
  fontWeight: FontWeight.bold,
);

const kResultTextStyle = TextStyle(
  color: Color(0xFF24D876),
  fontSize: 40.0,
  fontWeight: FontWeight.bold,
);

const kBMITextStyle = TextStyle(
  fontSize: 100.0,
  fontWeight: FontWeight.bold,
);

const kBodyTextStyle = TextStyle(
  fontSize: 22.0,
);
//#endregion
