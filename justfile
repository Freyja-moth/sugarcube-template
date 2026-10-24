set default-list := true
set shell := ["nu", "-c"]

[arg('release', long, value = "release")]
build release = "debug":
  mkdir target
  mkdir target/{{release}}
  rm --force -r target/{{release}}/build 
  mkdir target/{{release}}/build

  if (("./node_modules" | path exists) != true) { npm i }

  npx webpack --mode {{ if release == "release" { "production" } else { "development" } }}

  cp -r src/story target/{{release}}/build/story
  cp -r src/audio target/{{release}}/build/audio 
  cp -r src/images target/{{release}}/build/images
  cp -r src/videos target/{{release}}/build/videos 
  cp src/StoryData.twee target/{{release}}/build/StoryData.twee

  tweego -o target/{{release}}/index.html target/{{release}}/build

[arg('release', long, value = "release")]
run release = "debug": (build release)
  xdg-open target/{{release}}/index.html

