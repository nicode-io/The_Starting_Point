//#region TABLE OF CONTENT
/// ----------------
///
/// 1. Imports
/// 2. IconContent widget
///
//#endregion

//#region 1. Imports
import 'package:flutter/material.dart';
import 'package:bmi_calculator/constants.dart';
//#endregion

//#region 2. IconContent widget
class IconContent extends StatelessWidget {
  // Constructor
  IconContent(
      {@required this.icon, @required this.label, @required this.colour});

  // Properties
  final IconData icon;
  final String label;
  final Color colour;

  // Widget
  @override
  Widget build(BuildContext context) {
    return Column(
      mainAxisAlignment: MainAxisAlignment.center,
      children: [
        Icon(
          icon,
          size: 80.0,
        ),
        SizedBox(
          height: 15.0,
        ),
        Text(
          label,
          style: kLabelTextStyle,
        ),
      ],
    );
  }
}
//#endregion
