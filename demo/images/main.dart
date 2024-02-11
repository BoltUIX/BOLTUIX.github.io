import 'package:flutter/material.dart';

void main() => runApp(const MyApp());

class MyApp extends StatelessWidget {
  const MyApp({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return  MaterialApp(
      title: 'Image widget',
      home: const BasicWidgetImage(),
      theme: ThemeData(
        colorScheme: ColorScheme.fromSeed(seedColor: Colors.blueAccent),
        useMaterial3: true,
      ),
    );
  }
}


class BasicWidgetImage extends StatelessWidget {
  const BasicWidgetImage({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    final textTheme = Theme.of(context)
        .textTheme
        .apply(displayColor: Theme.of(context).colorScheme.onSurface);

    return Scaffold(
        body: SingleChildScrollView(
          child: Center(
            child: Column(
                mainAxisAlignment: MainAxisAlignment.center,
                crossAxisAlignment: CrossAxisAlignment.center,
                mainAxisSize: MainAxisSize.max, // set mainAxisSize to max
                children: [

                  //Displaying an image from the assets folder:
                  Text( "Displaying an image from the assets folder", style: textTheme.bodyMedium!),
                  Image.asset(
                    'assets/images/bg.jpg',
                    width: 200,
                    height: 200,
                    fit: BoxFit.cover,
                  ),

                  //Displaying a circular image:
                  const SizedBox(height: 20),
                  Text( "Displaying a circular image", style: textTheme.bodyMedium!),
                  const CircleAvatar(
                    backgroundImage: NetworkImage('https://raw.githubusercontent.com/BoltUIX/FlutterBlog/main/assets/images/bg.webp'),
                    radius: 80,
                  ),


                  //Displaying a rounded rectangle image:
                  const SizedBox(height: 20),
                  Text( "Displaying a rounded rectangle image", style: textTheme.bodyMedium!),
                  ClipRRect(
                    borderRadius: BorderRadius.circular(10),
                    child: Image.network(
                      'https://raw.githubusercontent.com/BoltUIX/FlutterBlog/main/assets/images/bg.webp',
                      width: 250,
                      height: 250,
                      fit: BoxFit.cover,
                    ),
                  ),

                  //Displaying a placeholder image while the actual image is loading:
                  const SizedBox(height: 20),
                  Text( "Displaying a placeholder image while the actual image is loading", style: textTheme.bodyMedium!),
                  FadeInImage.assetNetwork(
                    placeholder: 'assets/images/logo.webp',
                    image: 'https://raw.githubusercontent.com/BoltUIX/FlutterBlog/main/assets/images/bg.webp',
                    width: 250,
                    height: 250,
                    fit: BoxFit.cover,
                  ),

                  //Displaying a network image with a custom error widget:
                  const SizedBox(height: 20),
                  Text( "Displaying a network image with a custom error widget", style: textTheme.bodyMedium!),
                  Image.network(
                    'https://raw.githubusercontent.com/BoltUIX/FlutterBlog/main/assets/images/bg.webp',
                    width: 250,
                    height: 250,
                    fit: BoxFit.cover,
                    errorBuilder: (context, error, stackTrace) {
                      return const Icon(Icons.error);
                    },
                  ),
                ]),
          ),
        ));
  }
}
