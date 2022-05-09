//#region TABLE OF CONTENT
/// ----------------
///
/// 1. Imports
/// 2. IconContent widget
///
//#endregion

//#region 1. Imports
import 'package:flutter/material.dart';
//#endregion

//#region 2. ReusableCard widget
class ReusableCard extends StatelessWidget {
  // Constructor
  ReusableCard({@required this.colour, this.cardChild, this.onPress});

  // Properties
  final Color colour;
  final Widget cardChild;
  final Function onPress;

  // Rendering
  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onTap: onPress,
      child: Container(
        child: cardChild,
        margin: EdgeInsets.all(15.0),
        decoration: BoxDecoration(
          borderRadius: BorderRadius.circular(10.0),
          color: colour,
        ),
      ),
    );
  }
}
//#endregion
