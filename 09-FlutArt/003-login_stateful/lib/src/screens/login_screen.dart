import 'package:flutter/material.dart';

class LoginScreen extends StatefulWidget {
  const LoginScreen({Key? key}) : super(key: key);

  @override
  _LoginScreenState createState() => _LoginScreenState();
}

class _LoginScreenState extends State<LoginScreen> {
  @override
  Widget build(BuildContext context) {
    return Container(
      margin: EdgeInsets.all(20.0),
      child: Form(
        child: Column(
          children: <Widget>[
            emailField(),
            passwordField(),
            submitButton(),
          ],
        ),
      ),
    );
  }

  // Helper Methods: Form Fields
  Widget emailField() {
    return TextFormField(
      decoration: InputDecoration(
        labelText: 'Email address',
        hintText: 'Enter your email address',
      ),
      keyboardType: TextInputType.emailAddress,
    );
  }

  Widget passwordField() {
    return TextFormField(
      decoration: InputDecoration(
        labelText: 'Password',
        hintText: 'Choose a password'
      ),
      obscureText: true,
    );
  }

  Widget submitButton() {
    return ElevatedButton(
      child: Text('Submit'),
      onPressed: () {},
      color: Colors.amber,
    );
  }

}
