//#region TABLE OF CONTENT
/// ----------------
///
/// 1. Imports
/// 2. ResultsPage widget
///
//#endregion

//#region 1. Imports
import 'package:bmi_calculator/constants.dart';
import 'package:bmi_calculator/components/ReusableCard.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:bmi_calculator/components/BottomButton.dart';
import 'package:bmi_calculator/screens/inputPage.dart';
//#endregion

//#region 2. ResultsPage widget
class ResultsPage extends StatelessWidget {
  ResultsPage(
      {@required this.bmiResult,
      @required this.resultText,
      @required this.resultInterpretation});

  final String bmiResult;
  final String resultText;
  final String resultInterpretation;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('CALCUL D\'IMC'),
      ),
      body: Column(
        mainAxisAlignment: MainAxisAlignment.spaceEvenly,
        crossAxisAlignment: CrossAxisAlignment.stretch,
        children: [
          Expanded(
            child: Container(
              padding: EdgeInsets.fromLTRB(30.0, 15.0, 0, 15.0),
              alignment: Alignment.bottomLeft,
              child: Text(
                'Votre résultat',
                style: kTitleTextStyle,
              ),
            ),
          ),
          Expanded(
            flex: 5,
            child: ReusableCard(
              colour: kActiveCardColour,
              cardChild: Column(
                mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                crossAxisAlignment: CrossAxisAlignment.center,
                children: [
                  Text(
                    resultText.toUpperCase(),
                    style: kResultTextStyle,
                    textAlign: TextAlign.center,
                  ),
                  Text(
                    bmiResult,
                    style: kBMITextStyle,
                  ),
                  Padding(
                    padding: const EdgeInsets.only(left: 10.0, right: 10.0),
                    child: Text(
                      resultInterpretation,
                      style: kBodyTextStyle,
                      textAlign: TextAlign.center,
                    ),
                  ),
                ],
              ),
            ),
          ),
          BottomButton(
            onTap: () => {
              Navigator.pop(
                  context, MaterialPageRoute(builder: (context) => InputPage()))
            },
            buttonTitle: 'Recalculer',
          ),
        ],
      ),
    );
  }
}
//#endregion
