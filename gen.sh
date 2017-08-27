node --print-code ./unsafe.js > code.txt
node --print-code-stubs  ./unsafe.js > stubs.txt
node --code-comments ./unsafe.js > comments.txt
node --print-opt-code ./unsafe.js > optimized.txt
node --print_all_code ./unsafe.js > all.txt
