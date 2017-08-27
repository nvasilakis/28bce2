node --print-code ./0.unsafe.js > 1.code.txt
node --print-code-stubs  ./0.unsafe.js > 1.stubs.txt
node --code-comments ./0.unsafe.js > 1.comments.txt
node --print-opt-code ./0.unsafe.js > 1.optimized.txt
node --print_all_code ./0.unsafe.js > 1.all.txt
