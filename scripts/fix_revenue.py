import re
with open('App.tsx','r') as f:
  c = f.read()
c = re.sub('<span className="text-5xl font-black text-\[#0e1]?[0-9a-fA-F]*\][^"]*">
\s*\{\(filteredProducts.reduce[^<]*</span>','<span className="text-5xl font-black text-[#00b37e] leading-none tracking-tighter">
                  3.9M
                </span>', c, count=1)
with open('App.tsx', 'w') as f:
  f.write(c)
