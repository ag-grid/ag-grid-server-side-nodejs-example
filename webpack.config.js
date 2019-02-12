import HtmlWebpackPlugin from 'html-webpack-plugin';
import LiveReloadPlugin from 'webpack-livereload-plugin'
export default  {
  entry: './client/index.js',
  output: {
    path: '/',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        use: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      },
      {
        use: ['style-loader', 'css-loader'],
        test: /\.css$/
      },
      {
      	test: /\.scss$/,
        use: [{
            loader: "style-loader"
        }, {
            loader: "css-loader", options: {
                sourceMap: true
            }
        }, {
            loader: "sass-loader", options: {
                sourceMap: true
            }
        }]
      }
    ]
  },

  // devServer: {
  //   setup(app) {
  //
  //     app.use(bodyParser.json());
  //
  //     app.get("/fred", function(req, res){
  //       res.send({fred: 101});
  //     });
  //
  //   },
  // },

  // devServer: {
  //   inline: true,
  //
  //   port: 4000,
  //
  //   publicPath: '/',
  //
  //   setup(app){
  //
  //     app.use(bodyParser.json());
  //
  //     app.get("/get/some-data", function(req, res){
  //       console.log(req);
  //       res.send("GET res sent from webpack dev server")
  //     });
  //
  //     app.post("/post/some-data", bodyParser.json(), function(req, res){
  //       console.log(req.body);
  //       res.send("POST res sent from webpack dev server")
  //     })
  //
  //   }
  // },

  plugins: [
    new HtmlWebpackPlugin({
      template: 'client/index.html'
    }),
    new LiveReloadPlugin()
  ]
};

