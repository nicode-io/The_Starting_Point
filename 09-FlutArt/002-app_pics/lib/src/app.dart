import 'package:flutter/material.dart';
import 'package:http/http.dart' show get; // Import only the API needed (get)
import 'models/image_model.dart';
import 'dart:convert';
import 'widgets/image_list.dart';

class App extends StatefulWidget {
  createState() {
    return AppState();
  }
}

class AppState extends State<App> {
  int counter = 0;

  // Create image array
  List<ImageModel> images = [];

  // HTTP Request to fetch an image
  void fetchImage() async {
    counter++;
    final response = await get(Uri.parse('https://jsonplaceholder.typicode.com/photos/$counter')); // get API returns Future = Promise in JS
    final imageModel = ImageModel.fromJson(json.decode(response.body)); // Handle Future (Promise in JS) and parse result

    // Add image to images array and update widget
    setState(() {
      images.add(imageModel);
    });
  }

  Widget build(context) {
    return MaterialApp(
      home: Scaffold(
        body: ImageList(images), // Use imported widget (see widgets/image_list.dart)
        floatingActionButton: FloatingActionButton(
          child: Icon(Icons.add),
          onPressed: fetchImage,
        ),
        appBar: AppBar(
          title: Text('Lets see some images!'),
        ),
      ),
    );
  }
}
