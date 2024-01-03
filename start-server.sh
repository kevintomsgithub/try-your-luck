#!/bin/bash

docker run --rm -it -v $(pwd):/app -p 3000:3000 try-your-luck npm run dev
