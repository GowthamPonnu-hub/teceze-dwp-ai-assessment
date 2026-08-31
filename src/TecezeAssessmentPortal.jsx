import React, { useState, useEffect, useRef } from "react";
import { Sparkles, ArrowRight, ArrowLeft, Download, CheckCircle2, RefreshCw, ShieldCheck, Gauge, Users, Cpu, Workflow, HeartHandshake, PiggyBank, Layers, Zap, Mail, CalendarDays, Video, X } from "lucide-react";

/* ————— TECEZE ONEWORK™ · Workplace Intelligence Assessment —————
   Theme: Transform your existing digital workplace into AI-driven workplace services.
   Merged from onework.teceze.com (offers, evidence scoring, dial, radar, reference target,
   customer action view) + Teceze DWP sales deck (ONEWORK™ operating model, portfolio, proof
   stats, business-case ranges, four-week Workplace Intelligence Assessment) + industry
   zero-touch research (40% automation today → 80–90% autonomous resolution by 2030).
   Flow: Landing → About you → Company profile → 24-question Pulse assessment (+ evidence
   confidence) → Teceze Claude analysis → ONEWORK™ scorecard + auto-downloaded gap report. */

const LOGO = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAS0AAADaCAYAAADzAxT7AAADAFBMVEX///8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALI7fhAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAgAElEQVR4nO2debgcVdH/v5VA2MK+hy1sAkEEZJdFUBQUlB0R3HDjdUFQfFVAUUT0p7wI4gLiBoKiCAIigpFdUBCQiGGVnbCEsCSBhOyf3x/V451Mema6e3qm595bn+eZJ7kz51RXn+5Tfc7pOlVSEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBECRY1QoEgxdgBUmbSVpX0tqSVk4+y0paStLSkkYlxedJmiFpjqSXJU2VNEXS05KekPSImU3upf7B4CSMVpALYG1JO0s6RNKWkjYqSfRTku6WdJWkq83sqZLkBkOMMFpBS4DFJO0kaTdJ20raUdIaXT7sZLkB+7ukOySNN7P5XT5mEASDGWAk8DbgBqrnLuDDVbdJ0B/ESCtYCGADSfvIp3+7VqxOI7dJulrShWb2aNXKBEFQMcChwHPVDqoy8RJwfNXtFQRBRQDvAq6p2BAV4XrgyKrbL+gtMT0cxgDLSjpX0mHJV3MlPStpmqTpyd+S3yfLShotaVVJK/ZW07ZcJOmz4TIxPAijNUwB1pP0dkljJT0k95d6XtJzkqaZ2eyG8iM0YLRWlbRm8hkraX1Jr5e0aW+0T+UhSV+TdHG8aQyCoC3AaGBX4MfAo9XNGLkYGNVe42CwEiOtIQzusb6CfGonSctJWlzujT5f7p3+gqSpZY5OgJUl7SFpO7kj6s5lyc7IlZJOMrMJPT5u0APCaA0RgI0kbSzpjZLeIJ+yraiFjdYSyb/zk89sJUZL0iRJD8rdCh6WNLEMQ4ZPKw+QdIx660IxVdIuZnZvD48Z9IAwWoOQZPqznqS1JO0l91YfJzdQZTBX0kS5N/pVkh6R9KSZvVJUYKLzJyW9X25Ye8FfJX3UzB7q0fGCIKgHeBPwS+BfwNQerhPNBB4ArsTdI5bu4BwWA3YDru6R7i8D25d5HYIgaAGwDrA/cB0wt0cdvR33Ah8BXtfBeY0CTgGe6IG+t+BvS2vHHo3vqQyCoCyA7YHz6W8P9WnAtcCBHZznarjxmtllXScBY5NjjgV+AvwA2B0YWdqFC4LhBrAp8FX6Z1SVlQuB7To47/2Ax7qs48+BxZPjrQ3clHx/N3AisAWwVHlXMwiGMMC6wC+AV7rccbvJfGA8sEfBNlgF+EqXdfwt/kazNkV9X91vs4CJwAnAmHKvcBAMEYAlgIPp72lgXuYCxwKrFWyTY+lue+zbcLzj8KluPU8DHwLWLOdKB8EQANgGn5oMVZ4APl+wbTYB7uyiXq9rON5WwLMpZScBxxPTxmA4A4wAjmBoja5a8Q1g9QLttBJweZd0uoZkfavueB8BXmtS/hZgm/LugiAYJCQd8ddd6oj9zEMUWKgHFge+2SWdDkk53p7AjCblpwMXEKOuYLgAbEj3pjyDganAYe1bKrXtvtwFfW4Elkw51g/b1LuAOr+vIBiS4FFBn+5CxxtszMNHTiMKtOGHgdkl6/P9lOMshe88aMUUYK9y7o4g6DOSzjan5M422DmjYFt+umQ9ZpIyagJWAJ5qU3cKsF/nd0gQ9BHAZ/HRRbAoPwOWaN+Ki7Tph3GfqrI4tslxjspQdz7wic7vlCDoAyh/VDAUWWR6lrFtjylRh4nA6JRjjMQ3ibdjNgXX6oKgb8BdGgbbVpyqOAvIFSYJdxs5tUQdTmhynFWBZzLUXwCcWM7dEwQ9Btib8heMhzpfKtjWPy/p+I/jiT7SjtFuUb7Gi8Dmnd09QTsiCGDJAOtK+oek3M6UHfKapCnySKQvS3pG0kx5ogq08LVeIGkleWTTlSQtL09Wsbw8WUUVzJF0qJldkadSYmhukrR1CTq8zcyuTTnGJvJrulwGGS9IereZ/b0EfYIUwmiVCB4b/RJJu3fxMFPkRukFSU9Kul3S/fJwyVMkTTEz8grF13SWkzRGbnC3lrSFPELqCpJWTj7dvGemyA3Hv/JUAjaT9Cd5ZqBOOM7MvtvkGKdJyrol6c9mtneHugRB9wEuKmmqUs8U4E/AB4EdgPWALE/8Ms9rWTwG1RuBw/FYVP/pwrkC/IMC8a2APUo49h008R/DI1A8n1HOApqskQVB34CHEG62by0vT+GRSj9DEriu38D9mHbBF9Fvp9x9lEU3WZ/T4XHnA03j1+MPj6zMAnYq3sJB0EWA7YCXOuwwk4Hv4xFLe70e1jF4WOgdgO8CD3fYFvOBDxfQYQTtt+C047QW8vO6WVzfWasGQZcAftVBJ5kCnIkv4A8JgBWBT+AjsPkF26XQQjY+lZ3UwfW4jSbTUzxQY7PN1GnMArbsrDWDoGTwmFhFRlnXAp+jT6d/ZQHsBJyET3fzMI8Co63kmJ049U4H1moh+4Kc8v5KiuNqEFQCng7rtpw38WPAx6rWvQqAvYCrcrTVDGDTgse6NOd1qTGfFmtR+IL/gpwyP1281YKgRMi3xnEvnjxhlar1rhJ8a8xe+NpXlqgXPy94nLUpnp7soBZylwWezCkv1raC/gBPmpqF7xBThEUAxgCnt2m7KcDyBeWfltO41Gi5ARq4Pqe8mQzxZYBgEAAcSPvoDePpICfgcAHPnP1t3EClUTSMzRiKBV38chu5Py0g88xirRMEJYAHibu3zU36MxpikAetwR1YL0xpywUUzKkI7Ej+WGY/aiPzSznlgS/wR2afoBrw1/nNmAy8r2odByu4r9WhLBoS5uwOZI7PaWAuayNvd4q5chxX9ByCoCNo/gZsAg2pqYJiAAb8LwPuJA+SM3xNnawDcxqXW2gRDhrfDVDEzeU3xVskCAoCrEH6lpXxwPpV6zfUAN6AO+/OBt5RUMYI4Hc5jMu9tIiomsi7uYDRuhtYrHhrBEEBgKNTbsbfEetXXQX4OD5lLNTO+HrZqxmNy8RWRiuRV2QxfjoFs24HQSHwBfh/NtyIl1LwlXyQD3yP5yIpv3LUz7rhOYvRKrIYvwA4uKj+gZM7jdMwZw8tHGzucnngumkV6TOsMLM7zGxWByIuzXqoDGWeKXB8k7R9gXpBHWG08rFn3f8nSPq0mc2vSpkgNxdLuitDuamS5rUpU4sIm5etKPhCIXDCaOVjk+TfR+QhdZ+uUpkgH2b2iqRvZig6NcPDaLKkuQXUGCdpqQL1goQwWhlJ1jjGJX/+j5k9VaU+QWGulvSfNmWyXNsFKjbSWklSLMZ3QBit7Kwjj0F+Rlryg2BwYGavyZNUtGJSBlGvSiqyNLCkpHCN6YAwWtl5u/wpfXzVigQd84c2v7+UQcYUeQahvJg861FQkDBaGUgWTreT9B0zm121PkHHXC7PYNSMyRlkLCepqKPoqgXrBQqjlZUl5aOsW6tWJOgcM5sj6dwmPy+Q9GwGMStLKupQXGQtLEgIo5WNWWZ2sZkVeVsU9CcXSXol5fu5yramtaCDY4fLQweE0cpAkeSnQd8zRdLElO/vk/tgtWNVFR9pZVkzC5oQRisYlpjZAkkPpPz052T62I7VVLz/TC9YL1AYrWB4c2/Kd9dlrFs01v8cZVszC5oQYTKCjgHWlnSQpLfKp00j5J1zoqRrJV3ep9udLpN0igY81O+QdGPGuhsUPOZ0ZVszC4KgbIC1gP8Dnm0T3eDvwEE0SYJaFXigwVvq9DwpR9088bnqub3f2iEIhgV4VNFncnbYvwFbVa17Pcl51NizfQ0JGAXcX9BondPtcwqCoAHgANKTRczBI4y2YgJ9lPsRzwQE8DKQyekTH2HOLGi0jur2OQ11Yk0ryAXwSUk/TP6cJvcu/7OkxyXNlDtOLil3vtxGHoNsDw34Jm0p6S/Au8ysH9Z27pHvI/yRmU3JWGd7FYvUMEvSeMmTvkrazMza7YMMgqAowJLAw3hSh28DG2esty1wJvB43Yjje93WNwvA0ngY5w1z1Dmp4CjrYZKIqHgU3M/QQSTWIAjaAHwF+C0FE3gAqwCHJ0ZvOrBC2ToW0GkJINebQOD8gkbrigY5PwHeWe4ZDX3CTyvIBLCSPDzP0Wb2WBEZZvaCmf1a0i7yyK+HlqhiIcxstpk9mrU8vnl+rYKHu6/h71mSvlBQVhAErQBG4+swZclbCtiBQZZSKxmZPVFglDUL2LxB1qnJb4VSow1XYqQVZMLMXk3CFZcl7zUzu93M2sVi7zfGSSqS3v56M2v0wK+9rdynM5WGF2G0giAfhyn/Rul5kr6R8v1Kyb/b0CKjdbAw0VBBkBFglKS9ClS9X9JtDbJM0hrJnxtJWrEz7YYPYbSCIDvvlPuZ5eXKJKpEPStpIFHKKvJw3kEGwmgFQXbeWqDOFEk/Sfl+nBaOFb9rIY2GIWG0giADyXRumwJVP25mj6d8/2Yt3P/eDBQNKhgEQSP4JuEVgBWTz7Dy5AbWxvcn5uGfpGSTxqNLXN9Q9jVgvSrObbAxqHxkgt4CbCl3AN1Nnn1maQ3sIQSYKelcM/thExFDiaMl5fXg/3qTUN3rStqh4bslJW0u6YkCugXB8AVYBtgFuAyY22IU8TjwY2CjqnXuNvj2o0k5R1lNDTnw9iZ1IgJEEOQB2AO4q01nnAgcCoyuWt9eAXwtp8G6ixbrU8ApTep9pZfnFQSDGuBYfKtJM2YClwNrtJc2tABuyGGwZgIHtpC1HPCfJnW/3svzCoJBCR5u5mdtOuJzwB5V61oFwI5tjHk9s2gTtQE4uUX903t1XkEwaMFjvLdiArBp1XpWBfliwf+yjazlaB2iOm2rTxAENYD30jo88ngKxs4aCgB70fplRI0FwDm0CdcMHNhGzsm9OrcgGHQA27cxWJcxzJ0d8YimWfhWRnl/aSPn2G6fUxAMWoArWnSeu4Cige6GBMBWtHcmnQX8AGgbLx44PoPxO6gX5xYEgw5gfWBGk47zSBisVI/1ND6VUd5GtJ9mzgW26Pa5BcGgBDi3RecZ9gHpgKPbGJh7gSNJ2aKTIstwJ9x2PMEw8n0LgswA69E8Z99FVetXNYmReaCFcZkArJtDXjsDWOOK9tKCYBgCfLJJp7kTWL1q/aoG+Ab+NrCRyXg26pXaS/mvrG2BVzMarViED4I0gB816TRHVK1b1QAHN2mbi8kxukpkLQX8PaPBmkXGHJJBMOwg3VlyMjCmat2qBN8ofnddm8wFLsL3WeaKhoKH7rk6o8EC388ZEVeCIA3gmpROM+y3j+CJU2tcDDSGjskj67QcBgvgt2WeSxAMKVJGANMY3tt0DDgAuA73pdqtA1lL4Z7x83MarSPLPKcgGFKw6EjrkgIylgVW7oZ+vSYxWquUJOtbOY0VwMNkcE4NBogY8cOPVxv+/lueysB2kq7WQM6+QY2ZYWYvdCIDdyP5saQv5qy6QNLJZvZaJ8cPgiENizo6Hpyz/h34nsVluqXjYAKfEt5RYIQF7g8WA4ecRIMNP+6v+z+SXsxSCRiBB6nbVtI/Jc3qgm6DCuBdkm6Qt0kRLk3JhxgEQT34PrhadId5wE4Z672nboRwTbf17HeAw2gdJaMdjwF5E2UEwfAEuLDOaL0pQ3kDbq3rcBf0Qs9+BF+/+mkHxgrcS373qs8lCAYNwDgGog7snKH82xo6XVrG5CEPPtqc3KHBAvhN1ecSBIMOPCoptInqQPp2lGFltIBd8RcYnUwHa9zFMPaLC4LCAG9OOlHLXHv4NpZGLu2VnlWCZ9T+SknGCmA6sGHV5zXYif1OwxQzuwk4TtKWbYqmZZdZEbAm2ZMHPcA4Se+W9H5J40oSO0fSF8zskZLkBcHwBM/Gk9oxcTeHv6WMGCYCS/Ra124DrIFv5Zle0siqno9UfX5BMCQAxtAkzC8wGngqpQO+ACzfa127Af5mdDM8ztjjXTBWMIzftgZBTwG2w90iGpnJIF+bwf3VTsUXxrMG6svLAuAohuCotEpiTStoxaaSRqZ8P0rSapIGzfoMvsF7jKRNJH1Q0i6SuuncOVPSd83sx108xrAkjFbQivWafD9SUuaMPfR40R5YTtI6kraWtLOkN0paVa7zqB6ocK+kw83snh4ca9gRRitoRatN0WvnkDMC2EXSnWY2o0Od/guevWY7uYFaUdJmksZKWj/5rtchX+ZL+oOk/423hEFQATSPJw85fbWAL+OB9kqbkuEvCo4AXuzSmlQebgb2LOvcgiAoAPD1Fp30JWC1HLIOT+pdTslhbXBXhW8Dk7pplZrwEPBZYPEyzykIggIAn2/TYb+QQ9bWDLyJnECGjdoF9F0T2Its2aE74TXgCmAPhojrRxAMCWieUqvGnUCmhW1gOeC5urqPAEXjULU71mKJQbkIzwb9SgmG6mXgX8Avge27oXeQjbZpvYPhCzBW0n1qvqC9QNKOZnZHRnnfllQ/Opsl6Twz+0QnerY55tKS1pW/PdxN0pvkC/WryhfvG106ZkuaJmmypP/Iw1HfLuk5SU+a2Zw62ZtIeqz+u6D7hNEKmoI7Rd4naYMWxY4xs7MyyttU0h2SRjf8dKmkr5rZvYUUzUliyFaT+2ktr4F+MFfSdElTJU1uZYzwt6HrmNlFXVY3CIKs4Ftc/tRm2vQY+VLFf7eJnOnAWcCq3TynMgCOBWYA21StSxAEDbQwMvV8OYe8vdrIuhvYLRkN9RV4bLH34dtz/gLETCUI+g3g9fhew1a8Brwuo7xRwA0ZDOEEPFJoX+zbA14H3JToNhlYp2qdgiBoAnB+BiOTZ7S1M9nf6F0H7EkOn7AyAVYEjmbhMMvHV6FLEAQZwZ03X2hjXGbQJnRzg8zPZDRaNZ4AfgPs3c1zrdNvDL7G9nCDHk9TUkbqIAi6CPDrDIblqawdGlgtMURF+Cvuhb41sGaJ57gmsD2+jvd0ynFfAfYv63hBMWIhMcgE7rN1o5pHfqhxnpkdmVHmRpKukpRpPSyF+XJ/qmckPSnpekkPJP+fYmZTmxx3MUkry/231pe0jzxkzdpqHb3iKDM7t6CuQUmE0Qoyg0/NrlD78C4nmtk3M8p8l6TLVW6282mSpiSf2ZJelWfSXkvS4nLfrJXlkSCycpWkg8xsdol6BkHQbYCTM07hPp1D5n7A1IJTxV5wOrBkN9s1CIIugbssZMmwPBv4GBmjHwDvZSCBbD9xIx5UMAiCwQxwRsZOfzGQFrI5TebuwP3dsj4F+CJ94icWBEGH4OnFvpGx8/8eWD2j3DewcDSIKpgLnNTtNgyCoAKAj+MhW9rxIPARMuxTBMYC3wFmdc0sNedGYK9etF0QBBWB78m7IKNRuAvYNaPcnfEwxr3gVaBrIXKC8giXh6A0EmN0mKQ95EkmmjFf0g2SrpN0T/J5Oi1jD7CUpEMk7S1pf5WfrOIfki6TdIWZ3V+y7CAIBgPAMvhU8GqyrU+9AlwJ7NtG7uZ4gtW0rNd5mAZcRY+2BAXlEiOtoKvg0RA2lbSG3KFzGblz6ly50+fLkl6Q9ISk+8xsQQaZq8tzGm4u92pfRx6JdDlJy8pHYwvkAf2myR1Ln5X0mDzB7D/N7KHSTjLoKWG0giEDHq++ZrTmS3rFzF6tVqsgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCAIpwzYe4HPyfV7zuq9OKSwh6WIzu7xTQcCG8kwx60laRZ4QYTH53rllJC0SlaAgtetwupn9uwyBwKYa0H1Fue4j5dtcRqoz3ReTNMHMTu9UzxrJFpxt5fsI15LrPFreNmXoXE9T/YHjJG2lwXO/1xghaZakE8zsxbKEAibf47mJBvaPrpj8XHY/GCnPpPQ1M2va/lmM1o2S3lySUr3iW2Z2QtHKwAGS3i9pdw1coF6wr5ldVbQysLSkgyUdKtd9mZL0SuNmM+v4vgDGSPqkpHdJekPHWmUnVX/gJkm79VCPshlrZk90KgRYVR4O6GOStpPUq8Qej0oa1yrr0WIZhLxWnj49Y07eCsA4eSyot0vaoXSNsjG/SCVgO0kfkPQWSeNK1ag5he8LPO/gvnLjupta5xrsFs30H4z3e40Z6nDUA7xVngdyf3lOyF4zs12BLEZryAN8SdKX1d2RSekkQ/evSPqipKUrVicTeNLXX8hHgkGfgGcGP0HSserz6C/D2mgBO0k6TtJBVeuSl2S97euSDq9alyzgqcSOlvQpSRtUrE5QRxIM8TuStqhalywMW6OFp2T/vXxxcVABrCEPVdwuRX0/cZJ8NBv0EcAnJf2waj3yUGYq8kEDsJmkqzU4Ddbikr6mQWKw8FRjX5J0YtW6BAuTzDS+VbUeeclitMpOJNALRjX7ARgtH2Ft1Dt1MtPyegAjJJ0n6aieaFMOH5Z3jH5bJ8mU+Xqokrwh/7M8RHU/0bTv1sgyPbxS0iQV81tBfrO+TdKYjHX+JulBFR8FLiHPsLKoMv7W6nvymOVFeU0e03y2yu+I7UID76L+WcNq+zADtpb0jQ6P87KkqfI3q2W1t8lj0qcxGB/SuQCWlE/Xl+1AzHT5dZmjcq/LI2rzBrSt0SrDgRC4StmN1jlmdkGnx2zCmfInfxEekHfACarAaCUGt4gBeEHStZJukid2aOr/kpOXWv0IbCLpKkmZMks3sED+hvEnkqbIk1OUbbSaucV8Q9LaKs9hMgvIr/0e8hcVRcn69vssuQNtEa6QdI7cuEyVJygpsx/MT2RWC3BNjvROH+2SDuOA+Tn0qOf/gBW6oVcO/Y8qoPcfgUre1AE/KtjWjzIMMzwDrwduK9hm4Nm4T8N3FrQ6zjsLyn8eOAkY2as2qRT6w2idUeBCvYzP/SsFWBWYkkPv+biRq+TtMLAG8EKB9v417iE/rAD2AV4r0F71vDfjsa4vIPtF4I3dboe+goqNFrAOxTrR+8rWpQjkfzqOr1jfEwu09QQ8m/SwAtiPfA+kRqYBx2Q81sbAqznlPwvs2e126Duo3mj9POeFAji5bD2KApyeQ++ZVPhUBDYEpuZs62fxbVTDCuDDFF+yAHgMyLxfE/hlgWO8o5tt0LdQodECVsGneXm4mYqmVo0Ao4H/5ND9vIr1/d+cbT0fOLJKnasAN1izc7ZVPc8A++U43jr4qCwPN9An/aCevlOoC2wtKe8i+lmtQmP0mH2U3adspjp3MeiUXXKW/7ekX3ZDkX4F+LKkUzoQ8W9J+5jZUznqfED5fLJmSfpUH/WD/zIcjFZeJ9K5kh7uhiIFeUuOso8nn0pInsp531beZ2aFolsMNnDn4C+oM4P1oNyY5DFYUv7oH7eZ2X056/SE4WC08q7vzJIHIqscYAnlM1r3VfxkXFf5jVbezjeYOUPSZzqo/3dJ7zCzaXkq4W4KG+Y81i05y/eMIb33MHnyb5ez2vNm1tJxsoesqnyxpp7pliIZ2Ur5Q+T0S1t3DWAJ4Ex1ZrD+Kun9eQ1WwihJa+asM7nAcXrCUB9pra3808PV8eiVC7qgTzvON7Pz6v5eTfmu0WPlqpObIm8tP46HRuk1syR9yMy62jnxDe7nyQNMFuUKSYeZ2ayC9deWPwDzcAxQRcimGZLeY2YzmhUY6kZrPeV/8o9WdeF2/97wdy0mfVYeL0+VQhSJPLGBqouv1dUQwvjm/AslZX7Ll8IfJH2wA4MleQTSvOe6kaoJKjBPbTazD+npoaSx6r/oAq1o3A+3nLLrP1fNNwF3HTyK6mAK9dNxaOJWACvLo4l0YrDOkXRAwSlhPWM0ePpB2+sy1EdabcNc9DlL5Cg7T9Ir3VIkA4vLp7PDHmA1+WbxbTsQ8zNJx5hZGcsUQ2qnwVAfafVyp343yKP/HEnPd0uRDJiG/kOwLcAWkv6kzgzWKWb2UTPLnaClCUUibfQtw/4mG2IMlinAkASPqHGlikeVnSfpm2b21fK0klQwy1O/MtRHWsOtE1c5slyg8mJ1DTrwTcXXq7Mw2J/tgsGSPCbZkGGoG622OdT6jMY1uDzrGZZSv2eY2VxJz1Z1/AIso5IeaonLxiUqbrBmy90vflCGPikMplyOba/LUJ8ePiwfcuc5zxmS7lI1floPNfzdLvxyPUvJPdJfKE+d3BTxeXpI1TjFzko+HQEcLumnKr7YPV3SR8zskk51acFj8vs5zyDlEVWzW2GG2kQuHepG60n5UyzPeT5SRrr3knhVvh6RJVrk4nIXj392U6E2FNn+dG4ZIb2rADhY7jhaNEnGXEkHm9lfSlMqncfkBjqPz+LpZnZ2l/TpiKE+PZwi6f6cddYAlu+GMgWYonwJRTbvliIZuVv519VW7oYi3QZ4j9wtoajBel4+wuq2wZJ89J13XWulbihSBkPaaCWbh2/LWW05Sat0QZ0iTJYPl7NSdebm25RvSisNQqMFHCfpNyqefmuapL26mMClkTmSns5Zp5OMVV1lSButhH/nLL+E+icn4nQturWnFZsnnulV8ZLy73/cuBuKdINk4/Mn1VnMsoclHWFmE0pSqy1J6J9Hc1Z7C9CX/l3DwWj9J2d5U75wMF3DzJB0Q44qW0rapEvqtCV5g5i3vbcDBkW2bEmnylPIF92z+ISkt5rZVeWplJm8RnKMpA91QY+OGQ5G69+SnstZ52PAHt1QpgB/lI+4sjBK0teTYHNVcWvO8qMlnQVkzdnXc4Dlga9KOroDMbdLOtzMqorVdrmkF3PW+Rwwtgu69D9Un9jirJyxsQGeBvpiMRK4OKfuh1ao66p4yqm8fL0qndsBnFfgfOq5B4/4UPV5/LCA7mdVrXclUL3R2gg3Qnk5Dyi62Fqm/h/IqfddVeoNnFCgrV8C9qlK5zSA1YEfAPMKnE+Ny/H9iJUDbEr+TEnzge/gccGGD/RHstaTcl6sGtcCXY27lEH3DYC5OfW+hIryCALL4BmJ8zIHd9bsC4ArC5xDPTdXfQ6NANcVPJcvVK17T6E/jNYb8NThRbgKeGc39Mqhf5EM2dcDe9MmVXqX9D2nYFvPwEdq6/da5zrd1wd+W1D/GufSh+tBwEHkfwCCP1DOpw9GjT15PQ5cI2mvjMU/ZmY/7ZIeZ0g6tgMRl0i6QNK98n2NZbbfSPYQY3MAAA0oSURBVElTzSw1Jha+UP1PSa8rIPseSRdLmij3ESqDGZLuahbvCVhL0h3KH5u8xouSzpT0Z+X3MWqHybe1PN+YCQhYVtJfJO3QgfwLzOwDHdTvKsD3JX26YPVp8uCG58vdW+aqvH5g8h0gz7eKIzbcjNYy8miQnaa7f1ndMVqntdrSArxX0q9LPGYnPCZpMzNrGtkB2F0ebjhPco40yt6baHKju7uZLWQQgbdJGt+h/HvkRrfXPnNzJR1lZi195fD1zlslvb7D4z2v8o3WdEnbm1nTN+ZDfe/hQpjZDDyb8dbqbMvLismnbNollf2dpE9I2rULx85L2wgaZnYj8HlJF3V4rDEd1k9jrtLv/zL6ROZU9V1g2XYFzGw6cLTcOHeywN6NSLUrqI0RHA5+WguRbO05Sj516TdaBmtLdD9M0nW9UacULpH0NWX3NesVc5S+T3IwR7udrYzRSczsRkn7qv9ShbWN1jrsjJYkmdmtkvaUb/AdVJjZM5I+rkGSL9DM5pnZyZL+p2pdgoUxs/GS3q9qwxnlZlgaLcmHyPJMKaeo/0YBLTGzRyW9VZ5ealBgZhfJn+x/qlqXYIAkysQO8oX1KrOTZ2bYGi1JMrOnzOwkSW/WIOtMyYbbgyV9T4PkZkv23L1L0mclTapYnSDBzB41sw/JZx/3VKxOW4a10aphZhPMbB9J+0g6Tb7e1fdrG2Y218yOlbSHpB8pf0SLnmNmC8zsTEnbSfqkpF8pDFhfYGY3ye+lQ+XRWPvSgPXq7WEez+zKtguY2Z8k/QkYKY+YsK98FDZW/qak2/vHCjmBmtktkm7BPfd3l7uX7CRPh76yupNJOW/m7oUws+cknS3pbDwEyi6SDpT7oY2VZ9fu5r3QLBZ5liix/coS6nAgYmYvyd9S/w53Sn6LpLfJ76d15W/3urm5vW2M+F75ab1J2V+P3m1mlWVKTgPfOL2avCN1c2vM42b2eFnCgDXlRmsZla93S+fSTkg8yZdXhtffHTBf0h2N6eYTA7pTl47ZbRZIurGVj1MnJPfTCvLgh93qB/Mk3Za8KQ+CIAiCIAh6StuhN7CX3AMb+Xx5hNyv40IzW8QxDQ8vsqukn5lZ3iiWNRmrSzpG0vVmdm3Db5tLeq+ky8zsriLyEzlLSvqSpAlmdnnOuofIveqvNLM84ZAHHe3aCXirfA3tl2Y2sdf6pQHsIOkd8vWpEXLv97PT7teccpeQu5rsmMgm+fePie9fpQCryfcU3mhm19d9b5I+KmkN+VaxjlOn9TUsHDhsdrLbG2ACnga8sfy3gOlA4ZDFwGbANODElN8OTI7fUTQIYIVEzm8K1P1DUnfIh+vA46IDpCZhAI4HXgH267VuaeBRRh9qiE7wavKw60TuKOCilL4wHzimLP07AY9kAvDthu9HAv9Ofmu3VazvyfL2sOZWf7yk38qfXDvJox1cArypwXLfK9+Zn5qyCA/xslMiZ758D9uZDTJekXS1pAcb6r5RA3GrD8HjRZ1dv2hX9+SfJx9J3pM4Ni6iSvIp8tSp1VkkqSTwPnmc9pHyhdGJkn6XEk3gjZL2T8qNlIeEvtTMUhNkApvIn/Jj5AuVf0wpc4h839tvzWxi8vbnGPmi9nlm9nBd2Q/JM67UFtJvSd6e1ssbqYGoGFsBpyZy6kfQD8n3sKWGtAZWlm89WkO+A+F6M5uaUu7dcjeI2tu7O83s92ky27CjPFnGdPnr+5ckzW/Wrjk4UX4ej0o6RJ5N2xJ9X64vmFzbwyT9y8x+BYyR72KYJun7jYvMwDaS3ilf3B4haXz9SKmu3Dvls5gR8n7z7YZ+U7uWaVthXlOTrUtJP/qI/O2gJN1vZr9oKFO7t0Ym5317sxkKHu57X7nTqiXHXWSki0dzPUR+H46Q39eXpsnMBQNxnD7Q8P0DyfebNHz//eT7vVNkHdnwpAKPCrlCQ7ktkt9Obfj+MHwEBj6au56GWFHAl4CX8SB0tSiN36AhbnryRF4AnFegTWrhjz+b8ttNyW9Tk6cwwCdSyn0i+W1Wci4At5MSuA/YD5iZlKmd//nAKg3ljk9++17y95Z17f26hrKX4NFC69vpFNxQ1cqMqjuf14Bn8MgN9XJOSX5/T4reewAPNuh9IylhrIEL68rV4j3lDp+SnPNrSZtuC4wAVgE2xCPYbkTO0MfAksCjiU5n4UEZN04+mwIrNpQfl+gwG9gEOC2pezZ12ZIS3Y5lIM7bbPyePKlB3mLAN+va52ngfhqi0wKvr13Hhu9HAv9I5C/f8NsaDMS7m5zI/lVKG9RmF68k5wbe10c2lBuNR2slOZfUkS6wMnBrUm5Kctz/y3pNWsKA0fpIw/d/Tr7fueH7M5Pv92r4fpfkJB4Hdkwu/BW40WpsyGaNvxjw4eS3z+IRMq2hzJLA1sB2wA54AD+AjRvKdcto3QBMAtbGb94pwCIZdYCPJzKOANZiIA75uIZyG+AdcBLeCccAp9ZumoayNSN1d/L3p9LKJb8tB2yVtNPODDyE1moot3bSThclbbZYw+8nJ/UOafh+c/zmfim5HmsyED32nBR9zkuOszFuWO4FHqNAAEPgZwywL3AL3tmn4gbxoJzyVsA7Hgw8iOo5LqXOtsCzyTEXAD/B18Tqy9Qezo8D2yTXehMajDrw5qTcnbjxXQNYjUUfxEWM1rlJnROTa7QmDUY4Kff7pNzWwFgGppuN8g5Nvr8uOZcNk/NqHFz8T1LuV8kxx5AxRHge59JGf5xaCIy2u7ITtpAPFceb2W2SBLygHM5wZjYPqAWxm2pmaYlM95fvJ1xaPo1bWT5V7FXIZJM0x8wmSRLwilqf4/Nm9jRQy0vX6Nw4Tt7W55vZnYnM8ZJOkLROQ9n75FOwzfER8H7yaUGjcTP5tO/98inJPEmrJ2Ub74mpyTnNMLM8AQS3k7f5zWZWM6JnSfqqfKppSYq0Rp40s9nAc5I2VE4/LTyI37bypYefyJcYfiHpO/KsyadLeiCPzETWbLm/22/kez5rI2KTZ9pZCDO7EzgtOd6zkj6TEnusFnLn+jYvlWoPkg0lXSm/Rq/IHYlTg0bmYGzy78clHZHI/qt8upjG02b2PPCMpM1a6HqlmT2Y8ntjuT0lXSt3rL5YPg1vSR6jNQp/ypqk7SW9UR7o7KGM9WvldgVWNrMX5fPrvM6DNS/pNRp/wIP8/VhuSN8tn/d/Wn4BerktxxgYkVibY9fK1c6rsezjyb/bA6PMbI4GLvhCRsTM5gInyNcD/yI3al8xs8ZrNFr+RnC2/C3bLHm7bZty/JoRzZuZqKb3usCIxAl1R7kBn9TEYEl+887WwNu5vKwvX3uZI+lUM5sE7Cpf1/udmX2+gMxX5duNjpbvlPhi7aHUDPxNXm3KvLo8ysUZDcVqa3tb1LVRGrWH878kfSX5/zz5Q6ZTahnBz5VUi2n/cpOy0sB92uz61O7JdjHFase9Sv5QkTKm+stitGrDum9L+ry8E46VK3xKytO3NgRuHDHcLOkK+dN/InCnPBBfWjC52sgkbWpQy912PDDdzH5Y99t8eWd5g6QvyBdhd0l0bhztWPIpMgKr1UnbZrKUFt7isrTSvYfrL740cK4L6ZksqF8uH0FeDvxN3nlq2y0aGS9/8u8gN0Y/SykzP6m/lqTj5J1ik+TYjQ+RWZLuknRAosdnGnL31fRuvJf+Js/ZuK+ka/AkD59L5P1Qi7KkBq6JtGg7ZmWSPEbU6pL+ATwtN8ZTJf2ggDyZGcD/k+9N3VzS/clIsLYofYqZ/bxWPpnmXCB/uJ8hfzH0XeBxM7usTvS9km6SbxWbCDwgb8cLzeziunJ3SXpEPnp9p7wNZ8tH1fWL+q36zVLJ943X9zJJe8vvr8WSc3pI/gKpnto9X399FtOi8m6VX4MjgQ3lL+Tmyg19/X1zi9zo7iHpyeS4dyhDst8sRusPcstrSfkR8iHpNWb2j5TyVyhlBJaMAg6QP31elyi5jdI7ynPyKd6NKfJvlvtpba2GqamZzQL2l3S4fGSAPJ71DC1qxWdJOln5M+9KfkNOlA+jGzlbvtWh9tT8lgaeqPXcJj/H2lTlz/IbMe1p80H5Jtb95SOjn0r6aVpYXTNbgL+Cf7ekB83s2ZQyM/G3de/QQDv9QN5OUxvKzk6u2xGSVtGixn98Uv+ehnpzgIPlRusDybF+Lu+QaW3+m6QtalOoWju2DIyYcm4vAXvK75FdlIQglnSdmT2SR1aD3GeA3eQPg23lfaHmp9XY0daUb16/1MzOxdcpj5C0Sv2IysxeBd4hfyu8m7xtF9Oi12ASsJOkg+QPl1FKf9g36zcLJJ0ln50s9LbczC4AJkg6QAPbptIesudL+ocGwjj9WH7PNsp7MNF1d/lsDPk1aOyrt+L+dO+S31emgQFPS3oawxo4UH4ic+RTlOPk8/2NzayMoW4QBEOcXseIH6eFE1ycJ+ncMFhBEARBEARBEARBEARBEARBEARBEARBEARBEAxh/j+PDrtPi/LdLwAAAABJRU5ErkJggg==";

const LEVELS = [
  { min: 0.0, max: 1.8, name: "Traditional", blurb: "Manual, reactive firefighting with little visibility of cost or experience." },
  { min: 1.8, max: 2.6, name: "Emerging", blurb: "Foundations exist, but delivery is inconsistent and largely reactive." },
  { min: 2.6, max: 3.4, name: "Standardised", blurb: "Stable, process-led services around the ~40% automation industry average." },
  { min: 3.4, max: 4.2, name: "Proactive", blurb: "Data-driven, automated services approaching experience-led delivery." },
  { min: 4.2, max: 5.01, name: "AI-Driven", blurb: "Predictive, autonomous operations tracking toward the 80–90% resolution benchmark leaders will reach by 2030." },
];
const getLevel = (score) => LEVELS.find((l) => score >= l.min && score < l.max) || LEVELS[0];

/* ————— Teceze proof & market context (from the DWP sales deck) ————— */
const TECEZE_STATS = [
  { v: "4.2M", l: "end users supported" },
  { v: "7.5M+", l: "devices supported" },
  { v: "6.8M", l: "tickets handled / year" },
  { v: "81%", l: "first-contact resolution" },
  { v: "97.2%", l: "SLA met across services" },
  { v: "40+ / 135+", l: "countries: presence / delivery" },
];

const MARKET_STATS = [
  { v: "60%", l: "of digital workplace initiatives will be re-evaluated by 2026", s: "Gartner, 2024" },
  { v: "2.5×", l: "higher employee engagement with mature digital workplaces", s: "Gartner, 2024" },
  { v: "30%", l: "lower IT costs with an integrated workplace strategy", s: "Gartner, 2024" },
  { v: "80–90%", l: "autonomous resolution is the 2030 leader benchmark — most organisations sit near 40% today", s: "Industry research" },
];

const ONEWORK_SERVICES = [
  { n: "Intelligent Service Desk", d: "24/7 multilingual, AI-first, shift-left L0–L3, omnichannel incl. Teams & walk-up" },
  { n: "Endpoint Engineering", d: "Imaging, packaging, patching, Intune/Autopilot modern management, Windows 11" },
  { n: "Digital Experience (DEX)", d: "Experience telemetry, XLA governance, AIOps, self-heal, proactive operations" },
  { n: "AI & Intelligent Automation", d: "Conversational AI, enterprise RAG, agentic ops, RPA — governed, evidence-led" },
  { n: "M365, Teams & Copilot", d: "Collaboration run, adoption, Copilot readiness & governance, VDI" },
  { n: "Field & Deskside Services", d: "Dedicated engineers, scheduled visits, SBD/NBD dispatch, VIP & tech bars" },
  { n: "Device Lifecycle & Depot", d: "Procure/DaaS, staging, deployment, break/fix swap, certified ITAD, buyback" },
  { n: "Smart Workplace & AV", d: "Meeting rooms & VCaaS, lockers & vending, experience centres, print, moves" },
  { n: "Workplace Security", d: "Endpoint protection, Zero Trust identity, compliance evidence, secure disposal" },
];

const ONEWORK_TARGETS = [
  "40–60% of demand deflected via AI channels before a human touch",
  "85%+ first-contact resolution and sustained 4.5/5 CSAT",
  "15–30% less digital friction (DEX score, sentiment, friction minutes)",
  "10–20% unit-cost opportunity (contact rate, MTTR, automation)",
  "30–60% faster cycle times (onboarding, software, access, migration)",
  "95%+ device health & compliance with audit-ready evidence",
];

const OFFERS = [
  {
    key: "Pulse", name: "ONEWORK™ Pulse", badge: "INSTANT · SELF-SERVE", featured: false, cta: "start",
    output: "A rapid, AI-scored readiness check of your existing digital workplace — this portal.",
    specs: ["24 evidence-anchored questions", "Instant AI gap assessment report", "Three 90-day priorities", "Best for initial benchmarking"],
    effort: "~7 minutes, self-serve, free",
  },
  {
    key: "Insight", name: "ONEWORK™ Insight", badge: "RECOMMENDED", featured: true, cta: "contact",
    output: "An advisor-validated assessment with evidence scoring and an executive scorecard.",
    specs: ["40-question assessment", "Evidence-confidence scoring", "Executive scorecard", "Validation workshop and 90-day plan"],
    effort: "~2 weeks with a Teceze advisor",
  },
  {
    key: "Blueprint", name: "ONEWORK™ Blueprint", badge: "TRANSFORMATION", featured: false, cta: "contact",
    output: "The four-week Workplace Intelligence Assessment: an evidence-led baseline returning a target architecture, lighthouse roadmap and ROI case built on your numbers.",
    specs: ["40 questions plus evidence", "Architecture and operating-model review", "Prioritised transformation roadmap", "Business case and pilot definition"],
    effort: "4 weeks · zero-risk, yours to keep",
  },
];

/* ————— Teceze consultants · Microsoft Teams booking —————
   Each entry links to that consultant's Microsoft Bookings "Book with me" page —
   the client picks a slot and a Teams meeting is added to both calendars.
   Replace name/role/bookingUrl with real values from Teams → Calendar → "Book with me"
   (or a shared Microsoft Bookings page). Add as many consultants as needed —
   the picker renders them all automatically. */
const CONSULTANTS = [
  {
    name: "Alexandra Hughes", role: "Digital Workplace Advisory Lead", region: "UK & Europe",
    focus: "XLA · DEX · Intelligent Service Desk",
    bookingUrl: "https://outlook.office.com/bookwithme/user/alexandra.hughes@teceze.com?anonymous&ep=plink",
  },
  {
    name: "Ananya Krishnan", role: "AI & Automation Practice Lead", region: "India, Middle East & APAC",
    focus: "Agentic AI · Copilot · Hyperautomation",
    bookingUrl: "https://outlook.office.com/bookwithme/user/ananya.krishnan@teceze.com?anonymous&ep=plink",
  },
  {
    name: "Daniel Carter", role: "Workplace Intelligence Consultant", region: "Americas",
    focus: "Endpoint · Field Services · Device Lifecycle",
    bookingUrl: "https://outlook.office.com/bookwithme/user/daniel.carter@teceze.com?anonymous&ep=plink",
  },
];
const initials = (n) => n.split(" ").map((w) => w[0]).slice(0, 2).join("").toUpperCase();

/* ————— company profile: industries, currencies & benchmarks ————— */
const INDUSTRIES = [
  "Financial Services", "Healthcare & Life Sciences", "Manufacturing", "Retail & Consumer",
  "Technology & Software", "Professional Services", "Public Sector & Government", "Education",
  "Energy & Utilities", "Transport & Logistics", "Media & Telecom", "Other",
];
const REGIONS = ["North America", "United Kingdom & Ireland", "Europe", "Middle East & Africa", "India & South Asia", "Asia Pacific", "Latin America"];
const WORK_MODELS = ["Office-based", "Hybrid", "Remote-first"];
const ACTION_WINDOWS = ["0–3 months", "3–6 months", "6–12 months", "12+ months"];
const IMPACT_LABELS = ["Limited", "Manageable", "Material", "High", "Critical"];

const CURRENCY_SYMBOLS = { USD: "$", GBP: "£", EUR: "€", INR: "₹", AED: "AED ", AUD: "A$", SGD: "S$" };
const FX_TO_USD = { USD: 1, GBP: 1.27, EUR: 1.08, INR: 0.012, AED: 0.27, AUD: 0.66, SGD: 0.74 };
const CURRENCIES = Object.keys(FX_TO_USD);

/* Indicative industry ranges (USD): annual DWP run-spend per employee, employees per workplace-IT FTE,
   employees per service-desk agent, employees per field technician. */
const BENCHMARKS = {
  "Financial Services":         { spendPerUser: [1200, 1800], usersPerIT: [60, 90],   usersPerSD: [250, 350], usersPerField: [350, 600] },
  "Healthcare & Life Sciences": { spendPerUser: [900, 1400],  usersPerIT: [55, 85],   usersPerSD: [220, 320], usersPerField: [300, 550] },
  "Manufacturing":              { spendPerUser: [600, 1000],  usersPerIT: [70, 110],  usersPerSD: [280, 400], usersPerField: [350, 650] },
  "Retail & Consumer":          { spendPerUser: [450, 850],   usersPerIT: [90, 140],  usersPerSD: [320, 450], usersPerField: [450, 800] },
  "Technology & Software":      { spendPerUser: [900, 1500],  usersPerIT: [90, 150],  usersPerSD: [300, 450], usersPerField: [500, 900] },
  "Professional Services":      { spendPerUser: [1000, 1500], usersPerIT: [70, 110],  usersPerSD: [280, 380], usersPerField: [400, 700] },
  "Public Sector & Government": { spendPerUser: [700, 1100],  usersPerIT: [60, 95],   usersPerSD: [250, 350], usersPerField: [350, 600] },
  "Education":                  { spendPerUser: [500, 900],   usersPerIT: [80, 130],  usersPerSD: [300, 420], usersPerField: [400, 750] },
  "Energy & Utilities":         { spendPerUser: [900, 1400],  usersPerIT: [65, 100],  usersPerSD: [260, 360], usersPerField: [350, 600] },
  "Transport & Logistics":      { spendPerUser: [550, 950],   usersPerIT: [80, 125],  usersPerSD: [300, 420], usersPerField: [400, 700] },
  "Media & Telecom":            { spendPerUser: [850, 1300],  usersPerIT: [75, 115],  usersPerSD: [280, 400], usersPerField: [400, 700] },
  "Other":                      { spendPerUser: [700, 1200],  usersPerIT: [70, 110],  usersPerSD: [280, 400], usersPerField: [400, 700] },
};

const IT_FIELDS = [
  { key: "itServiceDesk", label: "Service desk agents" },
  { key: "itField", label: "Field technicians" },
  { key: "itEngineering", label: "Engineering (endpoint / platform)" },
  { key: "itManagers", label: "Managers & team leads" },
  { key: "itAsset", label: "Asset management" },
  { key: "itOther", label: "Others (projects, VIP, AV…)" },
];

const num = (v) => (Number.isFinite(Number(v)) ? Number(v) : 0);
const fmtMoney = (n, cur) => `${CURRENCY_SYMBOLS[cur] || cur + " "}${Math.round(n).toLocaleString()}`;

function computeBenchmarks(company) {
  const bm = BENCHMARKS[company.industry] || BENCHMARKS["Other"];
  const employees = num(company.employees);
  const offices = num(company.offices);
  const spend = num(company.spend);
  const spendUSD = spend * (FX_TO_USD[company.currency] || 1);
  const itTotal = IT_FIELDS.reduce((a, f) => a + num(company[f.key]), 0);
  const metrics = [];
  const push = (id, label, v, [lo, hi], display, range, tones, notes) => {
    const dir = v > hi ? "above" : v < lo ? "below" : "within";
    metrics.push({
      id, label, display, range,
      statusLabel: dir === "within" ? "Within typical range" : dir === "above" ? "Above typical" : "Below typical",
      tone: tones[dir], note: notes[dir],
    });
  };
  if (employees > 0 && spend > 0) {
    const v = spendUSD / employees;
    push("spend", "Workplace spend per employee / year", v, bm.spendPerUser,
      `$${Math.round(v).toLocaleString()}`, `$${bm.spendPerUser[0].toLocaleString()}–$${bm.spendPerUser[1].toLocaleString()}`,
      { above: "warn", within: "good", below: "info" },
      {
        above: "Above the typical band — a clear cost-optimisation opportunity through 40–60% AI deflection and shift-left economics.",
        within: "Within the typical band — AI can now shift spend from run to transform.",
        below: "Below the typical band — lean, or a signal of under-investment in employee experience.",
      });
  }
  if (employees > 0 && itTotal > 0) {
    const v = employees / itTotal;
    push("it", "Employees per workplace IT FTE", v, bm.usersPerIT,
      `${Math.round(v)}`, `${bm.usersPerIT[0]}–${bm.usersPerIT[1]}`,
      { above: "info", within: "good", below: "warn" },
      {
        above: "Leaner than typical — automation and self-heal are essential to protect experience at this ratio.",
        within: "Overall staffing sits within the typical industry band.",
        below: "Heavier staffing than typical — the ~60% of demand that is repeatable and automatable can release significant capacity.",
      });
  }
  if (employees > 0 && num(company.itServiceDesk) > 0) {
    const v = employees / num(company.itServiceDesk);
    push("sd", "Employees per service desk agent", v, bm.usersPerSD,
      `${Math.round(v)}`, `${bm.usersPerSD[0]}–${bm.usersPerSD[1]}`,
      { above: "info", within: "good", below: "warn" },
      {
        above: "Stretched desk coverage — L0 AI deflection and self-service protect response times.",
        within: "Service desk coverage matches the typical industry band.",
        below: "More desk capacity than typical — routine demand is a prime candidate for AI virtual agents.",
      });
  }
  if (employees > 0 && num(company.itField) > 0) {
    const v = employees / num(company.itField);
    push("field", "Employees per field technician", v, bm.usersPerField,
      `${Math.round(v)}`, `${bm.usersPerField[0]}–${bm.usersPerField[1]}`,
      { above: "info", within: "good", below: "warn" },
      {
        above: "Thin field coverage — remote remediation, self-heal and predictive hardware swap become critical.",
        within: "Field coverage matches the typical industry band.",
        below: "High field coverage — smart lockers, vending, self-heal and remote-fix can cut dispatches sharply.",
      });
  }
  return {
    bm, employees, offices, spend, spendUSD, itTotal, metrics,
    spendPerUserLocal: employees > 0 && spend > 0 ? spend / employees : 0,
  };
}

/* ————— evidence confidence (from the ONEWORK™ assessment platform) ————— */
const EVIDENCE_OPTIONS = [
  { score: 25, label: "Self-reported" },
  { score: 50, label: "Partially evidenced" },
  { score: 75, label: "Documented" },
  { score: 100, label: "Telemetry-validated" },
];
const evidenceLabel = (score) => {
  if (score >= 75) return "Validated or telemetry-supported";
  if (score >= 50) return "Partially evidenced";
  if (score >= 25) return "Primarily self-reported";
  return "Evidence validation required";
};

/* ————— the six assessment pillars (24 Pulse questions, deck-tuned anchors) ————— */
const PILLARS = [
  {
    id: "process", name: "Process", short: "Process", icon: Workflow,
    tagline: "How work flows through your service desk and workplace operations.",
    services: ["Intelligent Service Desk", "AI & Intelligent Automation"],
    questions: [
      {
        id: "p1", text: "How are IT incidents and service requests handled today?",
        options: [
          "Email, phone calls and spreadsheets; no formal ITSM tool",
          "ITSM tool in place, but routing and triage are fully manual",
          "Standardised ITIL workflows with rule-based routing — around the ~40% automation industry average",
          "AI triage and predictive routing with partial auto-resolution",
          "AI virtual agents resolve end-to-end — tracking toward 80–90% autonomous resolution",
        ],
      },
      {
        id: "p2", text: "What does self-service and knowledge management look like?",
        options: [
          "No self-service portal or knowledge base",
          "Static FAQ pages that are rarely used or updated",
          "Searchable knowledge base with a service catalogue",
          "KCS knowledge culture — articles built in-flow, chatbot deflecting some contacts",
          "AI-curated knowledge and conversational self-service deflect 40–60% of demand",
        ],
      },
      {
        id: "p3", text: "How automated are routine tasks such as onboarding, access and password resets?",
        options: [
          "Entirely manual, handled ticket by ticket",
          "Documented procedures, but execution is manual",
          "Scripted automation for a few high-volume tasks",
          "Orchestrated joiner-mover-leaver workflows across HR, IT and security",
          "Hyperautomation: governed AI agents trigger, execute and verify routine work",
        ],
      },
      {
        id: "p4", text: "How do you approach problem management and continuous improvement?",
        options: [
          "Reactive firefighting; repeat incidents are common",
          "Major incidents are reviewed, but root causes rarely fixed",
          "Regular problem reviews with trend reporting",
          "Problem management fed by telemetry, not just tickets",
          "AI predicts and prevents issues before users are affected — prevention over problem management",
        ],
      },
    ],
  },
  {
    id: "technology", name: "Technology", short: "Technology", icon: Cpu,
    tagline: "Your device estate, productivity stack, telemetry and AI platforms.",
    services: ["Endpoint Engineering", "M365, Teams & Copilot", "Workplace Security"],
    questions: [
      {
        id: "t1", text: "How are end-user devices provisioned and managed?",
        options: [
          "Manual imaging and desk-side setup",
          "Basic MDM / SCCM with significant manual effort",
          "Modern management (Intune / Jamf) across most of the estate",
          "Zero-touch Autopilot provisioning with ring-based, persona-baseline policies",
          "Autonomous endpoint management driven by AIOps and device intelligence",
        ],
      },
      {
        id: "t2", text: "How would you describe your collaboration and productivity stack?",
        options: [
          "Fragmented legacy tools with a heavy on-premise footprint",
          "Cloud suite deployed, but adoption is patchy",
          "Standardised cloud suite (M365 / Google) used consistently",
          "Integrated stack with workflow automation across tools",
          "AI copilots embedded across documents, meetings and chat — governed and measured",
        ],
      },
      {
        id: "t3", text: "What digital employee experience (DEX) monitoring is in place?",
        options: [
          "None — we rely on users reporting issues",
          "Basic device health and uptime monitoring",
          "DEX tooling deployed (Nexthink, 1E, Lakeside) with dashboards",
          "Experience telemetry with automated self-heal for common faults",
          "Predictive DEX: friction measured in minutes and fixed before users notice",
        ],
      },
      {
        id: "t4", text: "Where is your organisation on enterprise AI and GenAI adoption?",
        options: [
          "No AI in use; access is blocked or ungoverned",
          "Individuals experiment with public AI tools informally",
          "Pilots under way with an emerging AI policy",
          "Governed AI assistants and Copilot deployed to key functions",
          "Enterprise AI embedded in daily workflows — evidence-led, human-in-the-loop, with clear ROI",
        ],
      },
    ],
  },
  {
    id: "people", name: "People", short: "People", icon: Users,
    tagline: "Skills, adoption, support talent and leadership sponsorship.",
    services: ["M365, Teams & Copilot", "Intelligent Service Desk"],
    questions: [
      {
        id: "pe1", text: "How strong are digital skills and AI literacy across the workforce?",
        options: [
          "No structured digital skills programme",
          "Ad-hoc training when new tools launch",
          "Role-based digital training with completion tracking",
          "Continuous learning paths including AI fundamentals and prompt skills",
          "Organisation-wide AI fluency with certified champions in every function",
        ],
      },
      {
        id: "pe2", text: "How is adoption and change management handled for new workplace services?",
        options: [
          "Tools are launched with little or no communication",
          "Announcements and manuals, but no follow-through",
          "Structured change plans for major rollouts",
          "Persona-based adoption waves with usage tracking",
          "Outcome-led adoption: measured by usage and behaviour change, not licences",
        ],
      },
      {
        id: "pe3", text: "How is your IT support workforce organised and skilled?",
        options: [
          "Reactive generalists focused on closing tickets",
          "Tiered support with basic KPIs",
          "Skilled teams with defined career and knowledge paths",
          "Experience-focused teams using automation to remove toil",
          "AI-augmented teams — roles evolved from ticket handlers to AI orchestrators",
        ],
      },
      {
        id: "pe4", text: "How would you describe culture and leadership sponsorship for AI-driven transformation?",
        options: [
          "Resistance to change; transformation is seen as an IT project",
          "Interest exists, but there is no executive ownership",
          "A sponsored programme with a defined roadmap",
          "Active executive sponsorship with funded initiatives",
          "AI-first culture: transformation owned at board level with clear accountability",
        ],
      },
    ],
  },
  {
    id: "xla", name: "XLA", short: "XLA", icon: Gauge,
    tagline: "Experience Level Agreements — measuring what employees actually feel.",
    services: ["Digital Experience (DEX)"],
    questions: [
      {
        id: "x1", text: "How do you measure the quality of workplace services?",
        options: [
          "We don't measure beyond basic ticket counts",
          "Traditional SLAs only (uptime, response, resolution)",
          "SLAs plus periodic user satisfaction surveys",
          "Defined XLAs designed and measured alongside SLAs",
          "Contractually embedded XLAs combining telemetry, sentiment and business outcomes",
        ],
      },
      {
        id: "x2", text: "How persona-aware are your workplace services?",
        options: [
          "One-size-fits-all service for everyone",
          "VIP handling exists, but only informally",
          "Basic segmentation (e.g. field vs office workers)",
          "Defined personas with tailored journeys and service entitlements",
          "Persona-level XLA targets and experience baselines by site, role and region",
        ],
      },
      {
        id: "x3", text: "How is employee sentiment about IT captured?",
        options: [
          "It isn't captured at all",
          "Annual or ad-hoc surveys with low response rates",
          "Transactional CSAT after ticket closure",
          "Regular voice-of-employee pulse surveys across channels",
          "Continuous, multi-channel sentiment correlated with experience telemetry",
        ],
      },
      {
        id: "x4", text: "What happens with experience data once it's collected?",
        options: [
          "Nothing — the data is not reviewed",
          "Reviewed occasionally, rarely actioned",
          "Reported monthly with some follow-up actions",
          "Drives a prioritised experience improvement backlog",
          "Closed-loop: digital friction minutes managed as a metric, AI-prioritised and verified",
        ],
      },
    ],
  },
  {
    id: "cost", name: "Cost & Efficiency", short: "Cost", icon: PiggyBank,
    tagline: "Cost transparency, shift-left economics and productivity friction.",
    services: ["Device Lifecycle & Depot", "AI & Intelligent Automation"],
    questions: [
      {
        id: "c1", text: "How well do you understand workplace service costs (per user, per service)?",
        options: [
          "Costs are opaque; no per-service breakdown",
          "Annual budget view only",
          "Cost per user / device tracked for major services",
          "Granular cost-to-serve with benchmarking against peers",
          "Real-time cost analytics with AI-driven optimisation recommendations",
        ],
      },
      {
        id: "c2", text: "What share of IT contacts is deflected through self-service or automation (shift-left)?",
        options: [
          "Under 5% — almost everything reaches an agent",
          "5–15% deflection",
          "15–25% with an active shift-left programme",
          "25–40% through automation and self-service",
          "40–60% deflected before a human touch — AI resolving routine demand end-to-end",
        ],
      },
      {
        id: "c3", text: "How are software licences and hardware assets optimised?",
        options: [
          "Unmanaged; unused licences and devices accumulate",
          "Manual true-ups at renewal time",
          "Asset registers with periodic reviews",
          "Automated usage-based reclamation, rightsizing and buyback",
          "AI continuously optimises licences, device lifecycle and cloud spend with audit evidence",
        ],
      },
      {
        id: "c4", text: "How much productivity is lost to IT friction (slow devices, outages, waiting on support)?",
        options: [
          "Significant and unmeasured; complaints are constant",
          "Noticeable losses, measured only through ticket volumes",
          "Downtime is tracked with improvement targets",
          "Friction minutes measured in hours and cost, actively reduced",
          "Minimal friction: losses quantified, predicted and prevented",
        ],
      },
    ],
  },
  {
    id: "csat", name: "CSAT & Experience", short: "CSAT", icon: HeartHandshake,
    tagline: "Satisfaction, proactive support and the moments that matter.",
    services: ["Digital Experience (DEX)", "Field & Deskside Services", "Smart Workplace & AV"],
    questions: [
      {
        id: "s1", text: "How is CSAT for IT services measured, and where does it stand?",
        options: [
          "CSAT is not measured",
          "Measured occasionally; scores below 70% or unknown",
          "Measured consistently; scores sit at 70–80%",
          "Scores at 80–90% with visible improvement plans",
          "Sustained 90%+ CSAT with rich, multi-signal measurement",
        ],
      },
      {
        id: "s2", text: "Is workplace support proactive or reactive?",
        options: [
          "Entirely reactive: users must report every issue",
          "Mostly reactive with occasional maintenance campaigns",
          "Proactive for known high-impact issues",
          "Monitoring and self-heal trigger pre-emptive fixes for many issues",
          "Predictive and self-healing: most issues resolved before employees notice",
        ],
      },
      {
        id: "s3", text: "Which channels can employees use to get support?",
        options: [
          "Phone and email only",
          "A portal exists, but phone remains dominant",
          "Portal, chat and walk-up options are available",
          "Consistent omnichannel — phone, portal, Teams, tech bars — with unified queues",
          "Seamless omnichannel with an AI concierge as the front door",
        ],
      },
      {
        id: "s4", text: "How well designed are the moments that matter (day-one onboarding, hybrid work, executive support)?",
        options: [
          "Poor and inconsistent; frequent day-one failures",
          "Basic processes exist, but experiences vary widely",
          "Standardised journeys for key moments",
          "Designed, measured journeys with clear owners — day-one-ready devices",
          "Signature experiences: personalised, instrumented and continuously improved",
        ],
      },
    ],
  },
];

const TOTAL_QUESTIONS = PILLARS.reduce((n, p) => n + p.questions.length, 0);

/* ————— scoring & derived results ————— */
function computeScores(answers) {
  const pillars = PILLARS.map((p) => {
    const vals = p.questions.map((q) => answers[q.id]).filter(Boolean);
    const score = vals.length ? vals.reduce((a, b) => a + b, 0) / vals.length : 0;
    return { id: p.id, name: p.name, short: p.short, score: Math.round(score * 10) / 10 };
  });
  const answered = Object.values(answers).filter(Boolean);
  const overall = answered.length ? Math.round((answered.reduce((a, b) => a + b, 0) / answered.length) * 10) / 10 : 0;
  return { pillars, overall };
}

const refPill = (s100) => (s100 >= 75 ? ["Ahead", "ahead"] : s100 >= 50 ? ["Aligned", "aligned"] : ["Needs acceleration", "needs"]);

function buildExtras(scores, evidence) {
  const overall100 = Math.round(scores.overall * 20);
  const pillars100 = scores.pillars.map((p) => ({ ...p, s100: Math.round(p.score * 20) }));
  const evVals = PILLARS.map((p) => evidence[p.id] ?? 25);
  const evidencePct = Math.round(evVals.reduce((a, b) => a + b, 0) / evVals.length);
  const alignment = Math.min(100, Math.round((overall100 / 75) * 100));
  const sorted = [...pillars100].sort((a, b) => b.s100 - a.s100);
  const topStrength = sorted[0];
  const priorityGap = sorted[sorted.length - 1];
  const rec = evidencePct < 50 || overall100 < 55
    ? {
        name: "ONEWORK™ Insight",
        action: "Validate these self-reported scores through evidence-confidence scoring, an executive scorecard and a validation workshop with a Teceze advisor.",
      }
    : {
        name: "ONEWORK™ Blueprint — the four-week Workplace Intelligence Assessment",
        action: "Convert this maturity position into an evidence-led baseline, a target architecture, a lighthouse roadmap and an ROI case built on your numbers. Zero-risk, and yours to keep.",
      };
  return { overall100, pillars100, evidencePct, alignment, topStrength, priorityGap, rec };
}

/* ————— fallback report (used if Teceze Claude is unreachable) ————— */
function fallbackReport(client, company, scores, extras) {
  const bench = computeBenchmarks(company);
  const level = getLevel(scores.overall);
  const weakest = [...scores.pillars].sort((a, b) => a.score - b.score).slice(0, 2).map((p) => p.name);
  const saveLo = fmtMoney(bench.spend * 0.1, company.currency);
  const saveHi = fmtMoney(bench.spend * 0.2, company.currency);
  const spendM = bench.metrics.find((m) => m.id === "spend");
  const itM = bench.metrics.find((m) => m.id === "it");
  return {
    executiveSummary: `${company.name || "The organisation"} (${company.industry || "cross-industry"}, ${bench.employees.toLocaleString()} employees across ${bench.offices} office${bench.offices === 1 ? "" : "s"}) operates at the "${level.name}" maturity level (${extras.overall100}/100), against an industry picture where most organisations sit near 40% automation and leaders will reach 80–90% autonomous resolution by 2030. The largest opportunities are in ${weakest.join(" and ")}. Workplace spend of ${fmtMoney(bench.spendPerUserLocal, company.currency)} per employee is ${spendM ? spendM.statusLabel.toLowerCase() : "unbenchmarked"} for the sector, and staffing of 1 workplace IT FTE per ${bench.itTotal ? Math.round(bench.employees / bench.itTotal) : "—"} employees is ${itM ? itM.statusLabel.toLowerCase() : "unbenchmarked"}. An experience-led, AI-first operating model could release ${saveLo}–${saveHi} annually while lifting CSAT, experience and agility.`,
    maturitySnapshot: `Overall maturity: ${level.name} (${extras.overall100}/100) — ${level.blurb}`,
    pillars: [...scores.pillars]
      .sort((a, b) => a.score - b.score)
      .map((p) => {
        const pl = getLevel(p.score);
        const def = PILLARS.find((d) => d.id === p.id);
        return {
          name: p.name,
          currentState: `${pl.name} (${Math.round(p.score * 20)}/100): ${pl.blurb}`,
          targetState: "AI-driven: predictive, automated, experience-governed delivery for this pillar.",
          keyGaps: [
            p.score < 3 ? "Heavy reliance on manual, reactive ways of working" : "Automation exists but is not yet intelligent or predictive",
            "Limited use of AI, telemetry and experience data to drive decisions",
          ],
          recommendations: [
            "Baseline current performance and define target-state KPIs and XLAs",
            "Introduce governed AI automation for the highest-volume, lowest-value activities",
            `Engage Teceze ${def ? def.services[0] : "ONEWORK™"} to operate this pillar to reference standard`,
          ],
        };
      }),
    quickWins: [
      "Deploy an AI virtual agent for password resets and the top-10 request types",
      "Stand up XLA + SLA reporting with transactional CSAT and friction-minute tracking",
      "Reclaim unused licences and rightsize the device estate with buyback recovery",
      "Automate joiner-mover-leaver flows end to end for day-one-ready starts",
    ],
    roadmap: [
      { phase: "0–3 months · Stabilise", focus: "Baseline, knowledge engineering and change adoption", initiatives: ["Maturity and XLA baseline with persona mapping", "AI-driven knowledge base and virtual-agent pilot on the desk", "Licence, asset and cost-to-serve baseline"] },
      { phase: "3–9 months · Modernise", focus: "Self-healing infrastructure and intelligent self-service", initiatives: ["DEX telemetry with automated self-heal remediation", "Zero-touch endpoint management — Autopilot, ring-based rollout", "Persona-based adoption waves and Copilot readiness"] },
      { phase: "9–18 months · Transform", focus: "AI-led, experience-governed operations", initiatives: ["Agentic AI service desk with governed autonomous resolution", "Contractual XLAs tied to business outcomes", "Outcome-based commercials with quarterly value reviews"] },
    ],
    businessImpact: {
      costSavings: `A 10–20% unit-cost opportunity — roughly ${saveLo}–${saveHi} of your ${fmtMoney(bench.spend, company.currency)} annual spend — via 40–60% AI deflection, shift-left and lifecycle optimisation; integrated strategies have delivered up to 30% (Gartner).`,
      csat: `A realistic path to 85%+ first-contact resolution and sustained 4.5/5 CSAT — Teceze's ONEWORK™ reference standard.`,
      efficiency: `30–60% faster cycle times across onboarding, software, access and migration journeys.`,
      experience: `15–30% less digital friction, governed through XLAs alongside SLAs and measured in friction minutes.`,
    },
    tecezeNextSteps: [
      "Book Teceze's four-week Workplace Intelligence Assessment — zero-risk, and yours to keep",
      "Co-design the target architecture and a lighthouse transformation scope",
      "Launch a measurable, reversible lighthouse in quarter one, then scale what works",
    ],
  };
}

/* ————— Teceze Claude report generation ————— */
async function generateReport(client, company, scores, answers, extras) {
  const bench = computeBenchmarks(company);
  const level = getLevel(scores.overall);
  const answerDetail = PILLARS.map((p) => ({
    pillar: p.name,
    score100: extras.pillars100.find((s) => s.id === p.id)?.s100,
    evidenceConfidence: `${(extras && extras.evidencePct) || 25}% overall`,
    onework_services: p.services,
    responses: p.questions.map((q) => ({ q: q.text, level: answers[q.id], chosen: q.options[(answers[q.id] || 1) - 1] })),
  }));

  const prompt = `You are Teceze Claude, the AI advisory engine behind ONEWORK™ — Teceze's Workplace Intelligence Assessment portal, themed "Transform your existing digital workplace into AI-driven workplace services."

ABOUT TECEZE (use to ground recommendations): a global digital workplace provider running experience-led, AI-first workplace operations on the ONEWORK™ operating model — ITIL 4 aligned, XLA + SLA governance, persona-based design, shift-left economics, evidence-led AI. Portfolio of nine sub-services: ${JSON.stringify(ONEWORK_SERVICES)}. ONEWORK™ reference targets: ${JSON.stringify(ONEWORK_TARGETS)}. Engagement path: this free Pulse assessment → optional Insight validation → the four-week Workplace Intelligence Assessment (evidence-led baseline, target architecture, lighthouse roadmap, ROI case) → lighthouse transformation → operate & optimise.

INDUSTRY CONTEXT: most organisations run near 40% service-desk automation with 60% of support work human-dependent; leaders will reach 80–90% autonomous resolution by 2030. The zero-touch journey runs: knowledge engineering & change adoption → self-healing infrastructure → user self-resolution → AI-led service desk. Gartner (2024): 60% of digital workplace initiatives will be re-evaluated by 2026; mature digital workplaces see 2.5× engagement; integrated strategies cut IT costs up to 30%.

A client completed the 24-question ONEWORK™ Pulse (scores 1–5 per question; pillar scores shown /100). Produce a concise, executive-grade GAP ASSESSMENT.

CLIENT: ${client.name}, ${client.role}
COMPANY PROFILE: ${JSON.stringify({
    company: company.name, industry: company.industry, region: company.region, employees: num(company.employees),
    offices: num(company.offices), workModel: company.workModel,
    annualDWPSpend: `${company.currency} ${num(company.spend).toLocaleString()}`,
    spendPerEmployee: bench.spendPerUserLocal ? `${company.currency} ${Math.round(bench.spendPerUserLocal).toLocaleString()}` : "unknown",
    devicesSupported: company.devices || "not provided", monthlyTickets: company.tickets || "not provided",
    currentPlatforms: company.currentTools || "not provided", primaryChallenge: company.primaryChallenge || "not provided",
    businessImpactOfChallenge: `${company.businessImpact}/5 (${IMPACT_LABELS[(company.businessImpact || 3) - 1]})`,
    expectedActionWindow: company.actionTiming, existingTecezeCustomer: !!company.existingCustomer,
    workplaceITTeam: Object.fromEntries(IT_FIELDS.map((f) => [f.label, num(company[f.key])])),
    totalWorkplaceITFTEs: bench.itTotal,
  })}
INDUSTRY BENCHMARK POSITION (vs typical ${company.industry || "industry"} ranges, USD): ${JSON.stringify(bench.metrics.map((m) => ({ metric: m.label, client: m.display, typicalRange: m.range, position: m.statusLabel })))}
OVERALL MATURITY: ${extras.overall100}/100 (${level.name}) · Evidence confidence: ${extras.evidencePct}% · Reference alignment vs ONEWORK™ 2026 target (75/100): ${extras.alignment}%
ASSESSMENT DATA: ${JSON.stringify(answerDetail)}

Respond with ONLY a valid JSON object — no markdown, no code fences, no preamble — exactly this schema:
{
 "executiveSummary": "string, max 90 words, board-ready, references overall maturity, the 40%→80-90% industry trajectory, biggest gaps and the primary challenge if provided",
 "maturitySnapshot": "one sentence positioning statement",
 "pillars": [ {"name":"Process|Technology|People|XLA|Cost & Efficiency|CSAT & Experience","currentState":"max 22 words","targetState":"max 20 words, AI-driven target","keyGaps":["max 3 items, each max 14 words"],"recommendations":["max 3 items, each max 16 words; name the relevant ONEWORK™ sub-service where apt"]} ] (one entry per pillar, all six, ordered from lowest to highest score),
 "quickWins": ["max 4 items, each max 14 words, 0-90 day actions"],
 "roadmap": [ {"phase":"0–3 months · Stabilise","focus":"max 10 words","initiatives":["max 3, each max 12 words"]}, {"phase":"3–9 months · Modernise", ...}, {"phase":"9–18 months · Transform", ...} ] (align phases loosely to knowledge engineering & change adoption → self-healing & DEX → AI-led operations),
 "businessImpact": {"costSavings":"max 22 words, % range AND absolute annual range of their stated spend, grounded in the 10-20% unit-cost / up-to-30% integrated ranges","csat":"max 18 words","efficiency":"max 18 words, use the 30-60% cycle-time range where honest","experience":"max 18 words, use the 15-30% friction range where honest"},
 "tecezeNextSteps": ["exactly 3 items, each max 16 words; the first must reference the four-week Workplace Intelligence Assessment"]
}
Ground every gap and recommendation in the client's actual answers AND the company profile: tailor to this size, sector, region, footprint, platforms and staffing model. Reference benchmark positions where relevant. Be specific, not generic. Keep total output compact.`;

  const response = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      model: "claude-sonnet-4-6",
      max_tokens: 1000,
      messages: [{ role: "user", content: prompt }],
    }),
  });
  const data = await response.json();
  const text = (data.content || []).filter((b) => b.type === "text").map((b) => b.text).join("\n");
  const clean = text.replace(/```json|```/g, "").trim();
  const start = clean.indexOf("{");
  const end = clean.lastIndexOf("}");
  return JSON.parse(clean.slice(start, end + 1));
}

/* ————— downloadable report ————— */
const esc = (s) => String(s ?? "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

function buildReportHTML(client, company, scores, report, extras) {
  const bench = computeBenchmarks(company);
  const level = getLevel(scores.overall);
  const date = new Date().toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
  const bar = (s100) => `<div style="background:#E3EBF4;border-radius:99px;height:10px;width:100%"><div style="height:10px;border-radius:99px;width:${s100}%;background:linear-gradient(90deg,#8A9BAE,#18C8E8,#0066FF)"></div></div>`;
  const pillarRows = extras.pillars100
    .map((p) => {
      const [lbl] = refPill(p.s100);
      return `<tr><td style="padding:8px 12px 8px 0;font-weight:600;white-space:nowrap">${esc(p.name)}</td><td style="padding:8px 12px;width:100%">${bar(p.s100)}</td><td style="padding:8px 0;font-family:'IBM Plex Mono',monospace;font-weight:600;white-space:nowrap">${p.s100}/100</td><td style="padding:8px 0 8px 12px;color:#47586B;white-space:nowrap">${esc(lbl)}</td></tr>`;
    })
    .join("");
  const profileRows = [
    ["Company", `${company.name}${company.industry ? " · " + company.industry : ""}${company.region ? " · " + company.region : ""}`],
    ["Employees", bench.employees.toLocaleString()],
    ["Offices / sites", String(bench.offices)],
    ["Work model", company.workModel || "—"],
    ["Annual DWP spend", `${fmtMoney(bench.spend, company.currency)}${bench.spendPerUserLocal ? ` (≈ ${fmtMoney(bench.spendPerUserLocal, company.currency)} per employee)` : ""}`],
    company.devices ? ["Devices supported", num(company.devices).toLocaleString()] : null,
    company.tickets ? ["Monthly ticket volume", num(company.tickets).toLocaleString()] : null,
    company.currentTools ? ["Current platforms", company.currentTools] : null,
    company.primaryChallenge ? ["Primary challenge", `${company.primaryChallenge} (impact ${company.businessImpact}/5 — ${IMPACT_LABELS[(company.businessImpact || 3) - 1]})`] : null,
    ["Expected action window", company.actionTiming || "—"],
    ["Workplace IT team", `${bench.itTotal} FTEs — ${IT_FIELDS.map((f) => `${f.label}: ${num(company[f.key])}`).join(" · ")}`],
  ]
    .filter(Boolean)
    .map(([k, v]) => `<tr><td style="padding:7px 16px 7px 0;color:#47586B;white-space:nowrap;vertical-align:top">${esc(k)}</td><td style="padding:7px 0;font-weight:600">${esc(v)}</td></tr>`)
    .join("");
  const benchRows = bench.metrics
    .map((m) => `<tr>
      <td style="padding:8px 14px 8px 0">${esc(m.label)}</td>
      <td style="padding:8px 14px;font-family:'IBM Plex Mono',monospace;font-weight:600;white-space:nowrap">${esc(m.display)}</td>
      <td style="padding:8px 14px;white-space:nowrap;color:#47586B">${esc(m.range)}</td>
      <td style="padding:8px 0"><strong>${esc(m.statusLabel)}</strong> — ${esc(m.note)}</td></tr>`)
    .join("");
  const refRows = extras.pillars100
    .map((p) => {
      const [lbl] = refPill(p.s100);
      const rp = (report.pillars || []).find((x) => x.name === p.name);
      const improve = rp && rp.recommendations && rp.recommendations[0] ? rp.recommendations[0] : "Baseline and define XLA targets";
      const color = lbl === "Ahead" ? "#1E9E6B" : lbl === "Aligned" ? "#0066FF" : "#A3402F";
      return `<tr><td style="padding:8px 14px 8px 0">${esc(p.name)}</td><td style="padding:8px 14px;font-family:'IBM Plex Mono',monospace;font-weight:600">${p.s100}/100</td><td style="padding:8px 14px;white-space:nowrap"><span style="color:${color};font-weight:700">${lbl}</span></td><td style="padding:8px 0">${esc(improve)}</td></tr>`;
    })
    .join("");
  const pillarSections = (report.pillars || [])
    .map((p) => {
      const def = PILLARS.find((d) => d.name === p.name);
      return `
    <div style="border:1px solid #D7E2ED;border-radius:14px;padding:20px 24px;margin:14px 0;page-break-inside:avoid">
      <h3 style="margin:0 0 10px;font-size:17px;color:#101820">${esc(p.name)}</h3>
      <p style="margin:4px 0"><strong style="color:#0066FF">Current state —</strong> ${esc(p.currentState)}</p>
      <p style="margin:4px 0"><strong style="color:#0E8CA6">AI-driven target —</strong> ${esc(p.targetState)}</p>
      <p style="margin:10px 0 4px;font-weight:700;font-size:13px;letter-spacing:.06em;text-transform:uppercase;color:#B08A2E">Key gaps</p>
      <ul style="margin:0 0 6px;padding-left:20px">${(p.keyGaps || []).map((g) => `<li>${esc(g)}</li>`).join("")}</ul>
      <p style="margin:10px 0 4px;font-weight:700;font-size:13px;letter-spacing:.06em;text-transform:uppercase;color:#1E9E6B">Recommendations</p>
      <ul style="margin:0;padding-left:20px">${(p.recommendations || []).map((r) => `<li>${esc(r)}</li>`).join("")}</ul>
      ${def ? `<p style="margin:10px 0 0;font-size:12.5px;color:#47586B"><b>ONEWORK™ services:</b> ${def.services.map(esc).join(" · ")}</p>` : ""}
    </div>`;
    })
    .join("");
  const roadmap = (report.roadmap || [])
    .map((ph) => `
    <div style="border-left:3px solid #0066FF;padding:2px 0 2px 18px;margin:16px 0;page-break-inside:avoid">
      <p style="margin:0;font-family:'IBM Plex Mono',monospace;font-size:13px;color:#0066FF;font-weight:600">${esc(ph.phase)}</p>
      <p style="margin:4px 0;font-weight:600">${esc(ph.focus)}</p>
      <ul style="margin:4px 0 0;padding-left:20px;color:#33435C">${(ph.initiatives || []).map((i) => `<li>${esc(i)}</li>`).join("")}</ul>
    </div>`)
    .join("");
  const impact = report.businessImpact || {};
  const impactCard = (label, val) =>
    `<div style="flex:1 1 220px;border:1px solid #D7E2ED;border-radius:14px;padding:16px 18px"><p style="margin:0 0 6px;font-size:12px;letter-spacing:.08em;text-transform:uppercase;color:#47586B;font-weight:700">${label}</p><p style="margin:0;color:#101820">${esc(val)}</p></div>`;
  const kpi = (label, val, sub) =>
    `<div style="flex:1 1 180px;border:1px solid #D7E2ED;border-radius:14px;padding:14px 16px"><p style="margin:0 0 4px;font-size:11px;letter-spacing:.1em;text-transform:uppercase;color:#47586B;font-weight:700;font-family:'IBM Plex Mono',monospace">${label}</p><p style="margin:0;font-size:20px;font-weight:700;color:#101820">${esc(String(val))}</p><p style="margin:3px 0 0;font-size:12px;color:#47586B">${esc(sub)}</p></div>`;

  return `<!DOCTYPE html><html><head><meta charset="utf-8"><title>ONEWORK™ Gap Assessment — ${esc(company.name)}</title>
<style>@import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600&family=Manrope:wght@400;500;600;700;800&family=IBM+Plex+Mono:wght@500;600&display=swap');
body{font-family:'Manrope','Segoe UI',Arial,sans-serif;color:#22314A;margin:0;background:#fff;line-height:1.55}
h1,h2{font-family:'Fraunces','Manrope',serif;color:#101820;font-weight:600} .wrap{max-width:840px;margin:0 auto;padding:48px 40px}
@media print {.wrap{padding:24px}}</style></head><body>
<div style="background:linear-gradient(135deg,#071426 0%,#0B1F3A 70%,#0B2A52 100%);color:#fff;padding:44px 40px">
  <div style="max-width:840px;margin:0 auto">
    <img src="${LOGO}" alt="Teceze" style="height:30px;margin-bottom:18px"/>
    <p style="margin:0;font-family:'IBM Plex Mono',monospace;font-size:12px;letter-spacing:.18em;color:#00D9FF">ONEWORK™ · WORKPLACE INTELLIGENCE · PULSE RESULT</p>
    <h1 style="color:#fff;margin:12px 0 6px;font-size:30px;line-height:1.2">AI-Driven Workplace Gap Assessment</h1>
    <p style="margin:0;color:#A9B6C7">Transform your existing digital workplace into AI-driven workplace services</p>
    <div style="margin-top:26px;display:flex;flex-wrap:wrap;gap:28px;font-size:14px">
      <span><span style="color:#00D9FF">Prepared for</span><br><strong>${esc(client.name)}</strong> · ${esc(client.role)}</span>
      <span><span style="color:#00D9FF">Company</span><br><strong>${esc(company.name)}</strong>${company.industry ? " · " + esc(company.industry) : ""}</span>
      <span><span style="color:#00D9FF">Contact</span><br>${esc(client.email)} · ${esc(client.mobile)}</span>
      <span><span style="color:#00D9FF">Date</span><br>${date}</span>
      <span><span style="color:#00D9FF">ONEWORK™ maturity</span><br><strong style="font-family:'IBM Plex Mono',monospace">${extras.overall100} / 100 — ${esc(level.name)}</strong></span>
    </div>
  </div>
</div>
<div class="wrap">
  <div style="display:flex;flex-wrap:wrap;gap:12px;margin-bottom:8px">
    ${kpi("Reference alignment", `${extras.alignment}%`, "vs the ONEWORK™ 2026 reference target (75/100)")}
    ${kpi("Evidence confidence", `${extras.evidencePct}%`, evidenceLabel(extras.evidencePct))}
    ${kpi("Top strength", extras.topStrength ? extras.topStrength.name : "—", extras.topStrength ? `${extras.topStrength.s100}/100` : "")}
    ${kpi("Priority gap", extras.priorityGap ? extras.priorityGap.name : "—", extras.priorityGap ? `${extras.priorityGap.s100}/100` : "")}
  </div>

  <h2>Executive summary</h2>
  <p>${esc(report.executiveSummary)}</p>
  <p style="color:#47586B;font-style:italic">${esc(report.maturitySnapshot || "")}</p>

  <h2 style="margin-top:34px">Company profile</h2>
  <table style="border-collapse:collapse;font-size:14px">${profileRows}</table>

  ${bench.metrics.length ? `<h2 style="margin-top:34px">Industry benchmark comparison</h2>
  <table style="width:100%;border-collapse:collapse;font-size:13.5px">
    <tr style="text-align:left;color:#47586B"><th style="padding:0 14px 6px 0;font-weight:600">Metric</th><th style="padding:0 14px 6px;font-weight:600">Your organisation</th><th style="padding:0 14px 6px;font-weight:600">Typical (${esc(company.industry || "industry")})</th><th style="padding:0 0 6px;font-weight:600">Position</th></tr>
    ${benchRows}
  </table>
  <p style="font-size:12px;color:#7B8BA1;margin-top:6px">Indicative industry ranges in USD; non-USD spend converted at approximate rates.</p>` : ""}

  <h2 style="margin-top:34px">Maturity scorecard</h2>
  <table style="width:100%;border-collapse:collapse;font-size:14px">${pillarRows}</table>
  <p style="font-size:12px;color:#7B8BA1;margin-top:6px">Question scale: 1 = reactive and ad-hoc · 3 = integrated and consistently managed · 5 = governed, autonomous and measurable. Industry context: most organisations run near 40% automation; leaders will reach 80–90% autonomous resolution by 2030.</p>

  <h2 style="margin-top:34px">Alignment with the ONEWORK™ 2026 reference target</h2>
  <table style="width:100%;border-collapse:collapse;font-size:13.5px">
    <tr style="text-align:left;color:#47586B"><th style="padding:0 14px 6px 0;font-weight:600">Pillar</th><th style="padding:0 14px 6px;font-weight:600">Score</th><th style="padding:0 14px 6px;font-weight:600">Alignment</th><th style="padding:0 0 6px;font-weight:600">Recommended improvement</th></tr>
    ${refRows}
  </table>
  <p style="font-size:12px;color:#7B8BA1;margin-top:6px">A reference-target comparison, not an audited industry benchmark. Insight and Blueprint validation increase confidence through evidence and telemetry.</p>

  <h2 style="margin-top:34px">Gap analysis by pillar</h2>
  ${pillarSections}

  <h2 style="margin-top:34px">Quick wins (first 90 days)</h2>
  <ul>${(report.quickWins || []).map((q) => `<li>${esc(q)}</li>`).join("")}</ul>

  <h2 style="margin-top:34px">Transformation roadmap</h2>
  ${roadmap}

  <h2 style="margin-top:34px">Projected business impact</h2>
  <div style="display:flex;flex-wrap:wrap;gap:14px">
    ${impactCard("Cost savings", impact.costSavings)}
    ${impactCard("CSAT uplift", impact.csat)}
    ${impactCard("Efficiency & agility", impact.efficiency)}
    ${impactCard("Employee experience", impact.experience)}
  </div>
  <p style="font-size:12px;color:#7B8BA1;margin-top:8px">Illustrative targets — every business case is built from your validated baselines, separating hard savings, cost avoidance, productivity capacity, risk reduction and agility.</p>

  <h2 style="margin-top:34px">Recommended next steps with Teceze</h2>
  <p style="margin:0 0 8px"><b>${esc(extras.rec.name)}</b> — ${esc(extras.rec.action)}</p>
  <ol>${(report.tecezeNextSteps || []).map((s) => `<li>${esc(s)}</li>`).join("")}</ol>
  <p style="font-size:13px;margin-top:10px">Book a Microsoft Teams meeting directly: ${CONSULTANTS.map((c) => `<a href="${c.bookingUrl}" style="color:#0066FF;font-weight:600">${esc(c.name)}</a> <span style="color:#7B8BA1">(${esc(c.region)})</span>`).join(" · ")}</p>
  <p style="font-size:13px;margin-top:6px">Or contact <b>sales@teceze.com</b> · teceze.com — start with clarity, not a contract.</p>

  <div style="margin-top:40px;padding-top:18px;border-top:1px solid #D7E2ED;font-size:12px;color:#7B8BA1">
    Generated by Teceze Claude, the AI advisory engine behind ONEWORK™. This Pulse result is indicative and self-reported (evidence confidence ${extras.evidencePct}%). Teceze: 4.2M end users · 7.5M+ devices · 6.8M tickets/yr · 81% first-contact resolution · 97.2% SLA · presence in 40+ countries, delivery in 135+. © ${new Date().getFullYear()} Teceze.
  </div>
</div></body></html>`;
}

function downloadReport(client, company, scores, report, extras) {
  const html = buildReportHTML(client, company, scores, report, extras);
  const blob = new Blob([html], { type: "text/html" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `ONEWORK-Gap-Assessment-${(company.name || client.name || "client").replace(/[^a-z0-9]+/gi, "-")}.html`;
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 4000);
}

/* ————— shared visual components (ported from the ONEWORK™ platform) ————— */
function Dial({ score, size = "sm", label = "", dark = false }) {
  const cx = 100, cy = 100, r = 78, startAngle = 135, sweep = 270;
  const clamped = Math.max(0, Math.min(100, score || 0));
  const toRad = (deg) => (deg * Math.PI) / 180;
  const pt = (deg, rad) => [cx + rad * Math.cos(toRad(deg)), cy + rad * Math.sin(toRad(deg))];
  const [sx, sy] = pt(startAngle, r);
  const [ex, ey] = pt(startAngle + sweep, r);
  const endAngle = startAngle + (clamped / 100) * sweep;
  const [fx, fy] = pt(endAngle, r);
  const fillLarge = endAngle - startAngle > 180 ? 1 : 0;
  const [nx, ny] = pt(endAngle, r - 16);
  const ticks = Array.from({ length: 6 }, (_, i) => {
    const angle = startAngle + (i * sweep) / 5;
    const [x1, y1] = pt(angle, r - 10);
    const [x2, y2] = pt(angle, r + 2);
    return <line key={i} className="tz-dial__tick" x1={x1} y1={y1} x2={x2} y2={y2} />;
  });
  return (
    <svg className={`tz-dial tz-dial--${size}${dark ? " tz-dial--dark" : ""}`} viewBox="0 0 200 200" role="img" aria-label={`Score ${Math.round(clamped)} of 100`}>
      <path className="tz-dial__track" d={`M ${sx} ${sy} A ${r} ${r} 0 1 1 ${ex} ${ey}`} fill="none" />
      {clamped > 0 && <path className="tz-dial__fill" d={`M ${sx} ${sy} A ${r} ${r} 0 ${fillLarge} 1 ${fx} ${fy}`} fill="none" />}
      {ticks}
      <line className="tz-dial__needle" x1={cx} y1={cy} x2={nx} y2={ny} />
      <circle className="tz-dial__hub" cx={cx} cy={cy} r={30} />
      <text className="tz-dial__value" x={cx} y={cy + 12} textAnchor="middle">{Math.round(clamped)}</text>
      {label && <text className="tz-dial__label" x={cx} y={cy + 32} textAnchor="middle">{label}</text>}
    </svg>
  );
}

function Radar({ pillars }) {
  const width = 400, height = 330, cx = 200, cy = 160, radius = 112;
  const count = Math.max(pillars.length, 3);
  const ang = (i) => -Math.PI / 2 + (i * Math.PI * 2) / count;
  const ringPts = (scale) => pillars.map((_, i) => `${cx + Math.cos(ang(i)) * radius * scale},${cy + Math.sin(ang(i)) * radius * scale}`).join(" ");
  const scorePts = pillars.map((p, i) => {
    const s = (p.s100 || 0) / 100;
    return `${cx + Math.cos(ang(i)) * radius * s},${cy + Math.sin(ang(i)) * radius * s}`;
  }).join(" ");
  return (
    <svg viewBox={`0 0 ${width} ${height}`} role="img" aria-label="ONEWORK maturity radar chart" className="tz-radar">
      <defs>
        <radialGradient id="tzRadarFill" cx="50%" cy="50%" r="65%">
          <stop offset="0%" stopColor="#18C8E8" stopOpacity=".34" />
          <stop offset="100%" stopColor="#0066FF" stopOpacity=".08" />
        </radialGradient>
      </defs>
      {[0.25, 0.5, 0.75, 1].map((s) => <polygon key={s} points={ringPts(s)} fill="none" stroke="#D7E2ED" strokeWidth="1" />)}
      {pillars.map((p, i) => {
        const x = cx + Math.cos(ang(i)) * radius;
        const y = cy + Math.sin(ang(i)) * radius;
        const lx = cx + Math.cos(ang(i)) * (radius + 28);
        const ly = cy + Math.sin(ang(i)) * (radius + 28);
        const anchor = lx < cx - 10 ? "end" : lx > cx + 10 ? "start" : "middle";
        return (
          <g key={p.id}>
            <line x1={cx} y1={cy} x2={x} y2={y} stroke="#D7E2ED" strokeWidth="1" />
            <text x={lx} y={ly} textAnchor={anchor} dominantBaseline="middle" fill="#47586B" fontSize="11">{p.short}</text>
          </g>
        );
      })}
      <polygon points={scorePts} fill="url(#tzRadarFill)" stroke="#18C8E8" strokeWidth="2.5" strokeLinejoin="round" />
      {pillars.map((p, i) => {
        const s = (p.s100 || 0) / 100;
        return <circle key={p.id} cx={cx + Math.cos(ang(i)) * radius * s} cy={cy + Math.sin(ang(i)) * radius * s} r="4.5" fill="#18C8E8" stroke="#fff" strokeWidth="2" />;
      })}
      <circle cx={cx} cy={cy} r="3" fill="#101820" />
    </svg>
  );
}

const Spectrum = ({ score, compact }) => {
  const pct = score ? Math.min(100, Math.max(2, ((score - 1) / 4) * 100)) : 0;
  return (
    <div className={"tz-spectrum" + (compact ? " tz-spectrum--compact" : "")}>
      <div className="tz-spectrum__track">
        {score > 0 && (
          <div className="tz-spectrum__marker" style={{ left: `${pct}%` }}>
            <span className="tz-spectrum__value">{Math.round(score * 20)}</span>
          </div>
        )}
      </div>
      <div className="tz-spectrum__labels">
        <span>Traditional</span>
        <span>Emerging</span>
        <span>Standardised</span>
        <span>Proactive</span>
        <span className="tz-spectrum__ai">AI-Driven</span>
      </div>
    </div>
  );
};

const GEN_STEPS = [
  "Scoring your 24 Pulse responses across six pillars",
  "Benchmarking spend and staffing against industry standards",
  "Comparing maturity with the ONEWORK\u2122 2026 reference target",
  "Modelling cost, CSAT, experience and agility impact",
  "Writing your executive gap assessment report",
];

/* ————— main app ————— */
export default function TecezeAssessmentPortal() {
  const [screen, setScreen] = useState("landing"); // landing | details | company | assess | generating | results
  const [client, setClient] = useState({ name: "", email: "", mobile: "", role: "" });
  const [errors, setErrors] = useState({});
  const [company, setCompany] = useState({
    name: "", industry: "", region: "", employees: "", offices: "", workModel: "Hybrid",
    spend: "", currency: "USD", devices: "", tickets: "",
    currentTools: "", primaryChallenge: "", businessImpact: 3, actionTiming: "6–12 months",
    existingCustomer: false, privacyConsent: false, benchmarkConsent: false,
    itServiceDesk: "", itField: "", itEngineering: "", itManagers: "", itAsset: "", itOther: "",
  });
  const [cErrors, setCErrors] = useState({});
  const [answers, setAnswers] = useState({});
  const [evidence, setEvidence] = useState({});
  const [pillarIdx, setPillarIdx] = useState(0);
  const [report, setReport] = useState(null);
  const [extras, setExtras] = useState(null);
  const [aiUsed, setAiUsed] = useState(true);
  const [genStep, setGenStep] = useState(0);
  const [booking, setBooking] = useState(null); // null | { topic }
  const downloadedRef = useRef(false);
  const topRef = useRef(null);

  useEffect(() => {
    if (!booking) return;
    const onKey = (e) => { if (e.key === "Escape") setBooking(null); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [booking]);

  const scores = computeScores(answers);
  const bench = computeBenchmarks(company);
  const answeredCount = Object.keys(answers).length;

  useEffect(() => {
    if (topRef.current) topRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [screen, pillarIdx]);

  useEffect(() => {
    if (screen !== "generating") return;
    setGenStep(0);
    const iv = setInterval(() => setGenStep((s) => Math.min(s + 1, GEN_STEPS.length - 1)), 2600);
    return () => clearInterval(iv);
  }, [screen]);

  const validateDetails = () => {
    const e = {};
    if (!client.name.trim() || client.name.trim().length < 2) e.name = "Enter your full name";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(client.email.trim())) e.email = "Enter a valid business email address";
    if (!/^[+()\-.\s\d]{7,20}$/.test(client.mobile.trim()) || client.mobile.replace(/\D/g, "").length < 7) e.mobile = "Enter a valid mobile number";
    if (!client.role.trim()) e.role = "Enter your role title";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const toCompany = () => { if (validateDetails()) setScreen("company"); };

  const validateCompany = () => {
    const e = {};
    if (!company.name.trim()) e.name = "Enter the company name";
    if (!company.industry) e.industry = "Select an industry";
    if (!company.region) e.region = "Select your primary region";
    if (!(num(company.employees) > 0)) e.employees = "Enter the total number of employees";
    if (!(num(company.offices) > 0)) e.offices = "Enter the number of offices / sites";
    if (!(num(company.spend) > 0)) e.spend = "Enter your approximate annual spend";
    const itTotal = IT_FIELDS.reduce((a, f) => a + num(company[f.key]), 0);
    if (!(itTotal > 0)) e.it = "Enter your workplace IT team breakdown — at least one role must be greater than zero";
    if (!company.privacyConsent) e.consent = "Accept the required privacy consent to run the assessment";
    setCErrors(e);
    return Object.keys(e).length === 0;
  };

  const startAssessment = () => {
    if (validateCompany()) {
      setScreen("assess");
      setPillarIdx(0);
    }
  };

  const pillar = PILLARS[pillarIdx];
  const pillarComplete = pillar ? pillar.questions.every((q) => answers[q.id]) : false;

  const finish = async () => {
    setScreen("generating");
    downloadedRef.current = false;
    const sc = computeScores(answers);
    const ex = buildExtras(sc, evidence);
    setExtras(ex);
    try {
      const r = await generateReport(client, company, sc, answers, ex);
      if (!r || !r.executiveSummary || !Array.isArray(r.pillars) || r.pillars.length < 6) throw new Error("incomplete");
      setReport(r);
      setAiUsed(true);
    } catch (err) {
      console.error("Teceze Claude unavailable, using local analysis:", err);
      setReport(fallbackReport(client, company, sc, ex));
      setAiUsed(false);
    }
    setScreen("results");
  };

  useEffect(() => {
    if (screen === "results" && report && extras && !downloadedRef.current) {
      downloadedRef.current = true;
      setTimeout(() => downloadReport(client, company, computeScores(answers), report, extras), 900);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [screen, report]);

  const restart = () => {
    setAnswers({});
    setEvidence({});
    setReport(null);
    setExtras(null);
    setPillarIdx(0);
    setScreen("landing");
  };

  const advisorMailto = (subject, body) =>
    `mailto:sales@teceze.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  const bookMailto = extras
    ? advisorMailto(
        `${company.name} — ONEWORK™ Pulse ${extras.overall100}/100 · Book the Workplace Intelligence Assessment`,
        `Dear Teceze team,\n\nWe have completed the ONEWORK™ Pulse assessment and would like to book the four-week Workplace Intelligence Assessment.\n\nContact: ${client.name} (${client.role})\nCompany: ${company.name} · ${company.industry} · ${company.region}\nEmail: ${client.email}\nMobile: ${client.mobile}\nPulse result: ${extras.overall100}/100 (${getLevel(scores.overall).name})\nPriority gap: ${extras.priorityGap ? extras.priorityGap.name : "—"}\nExpected action window: ${company.actionTiming}\n\nKind regards,\n${client.name}`
      )
    : "mailto:sales@teceze.com";

  return (
    <div className="tz-root" ref={topRef}>
      <StyleTag />
      <header className="tz-header">
        <div className="tz-header__brand">
          <img src={LOGO} alt="Teceze" className="tz-logo" />
          <span className="tz-header__divider" />
          <span className="tz-header__product">ONEWORK™ · Workplace Intelligence Assessment</span>
        </div>
        {screen === "assess" && (
          <div className="tz-header__progress">
            <span className="tz-mono">{answeredCount}/{TOTAL_QUESTIONS}</span>
            <div className="tz-progressbar"><div style={{ width: `${(answeredCount / TOTAL_QUESTIONS) * 100}%` }} /></div>
          </div>
        )}
      </header>

      {screen === "landing" && (
        <>
          <section className="tz-hero">
            <div className="tz-hero__inner">
              <p className="tz-eyebrow">TECEZE ONEWORK™ · POWERED BY TECEZE CLAUDE</p>
              <h1 className="tz-hero__title">
                Transform your existing digital workplace into <span className="tz-grad-text">AI-driven workplace services</span>
              </h1>
              <p className="tz-hero__sub">
                Experience-led, AI-first workplace operations — powered by the ONEWORK™ operating model and delivered digitally and physically, worldwide. Most organisations still run near 40% automation; leaders will reach 80–90% autonomous resolution by 2030. Take the free Pulse assessment to see where you stand — Teceze Claude benchmarks your maturity, spend and staffing, then generates your gap report instantly.
              </p>
              <div className="tz-pillars-chips">
                {PILLARS.map((p) => {
                  const Icon = p.icon;
                  return <span key={p.id} className="tz-chip"><Icon size={14} /> {p.name}</span>;
                })}
              </div>
              <div className="tz-hero__spectrum">
                <p className="tz-spectrum__caption">Where does your workplace sit today?</p>
                <Spectrum score={0} />
              </div>
              <div className="tz-hero__cta">
                <button className="tz-btn tz-btn--primary" onClick={() => setScreen("details")}>
                  Start the free Pulse assessment <ArrowRight size={17} />
                </button>
                <span className="tz-hero__meta"><Sparkles size={14} /> ~7 minutes · 24 questions · Instant AI gap report</span>
              </div>
            </div>
            <div className="tz-hero__panel">
              <div className="tz-hero__dialcard">
                <div className="tz-hero__topline"><span>ONEWORK™ TELEMETRY</span><span>LIVE</span></div>
                <Dial score={62} size="lg" label="INTELLIGENT READINESS" dark />
                <div className="tz-hero__metrics">
                  <div><span>AI deflection target</span><strong>40–60%</strong></div>
                  <div><span>First-contact resolution</span><strong>85%+</strong></div>
                  <div><span>Digital friction reduction</span><strong>15–30%</strong></div>
                </div>
              </div>
            </div>
          </section>

          <section className="tz-proof">
            {TECEZE_STATS.map((s) => (
              <div key={s.l} className="tz-proof__item"><strong className="tz-mono">{s.v}</strong><span>{s.l}</span></div>
            ))}
          </section>

          <section className="tz-band">
            <div className="tz-band__head">
              <p className="tz-eyebrow tz-eyebrow--dark">MARKET CONTEXT</p>
              <h2 className="tz-h2">The digital workplace imperative</h2>
              <p className="tz-muted">Hybrid work, device sprawl, AI at every desk and rising experience expectations have outgrown the traditional support model. The standard is now experience-led operations measured by XLAs, AI-first support with shift-left economics, modern cloud-managed endpoints and integrated physical delivery — run as one service, not a set of towers.</p>
            </div>
            <div className="tz-band__grid">
              {MARKET_STATS.map((m) => (
                <div key={m.v} className="tz-band__tile">
                  <strong className="tz-mono">{m.v}</strong>
                  <span>{m.l}</span>
                  <em>{m.s}</em>
                </div>
              ))}
            </div>
          </section>

          <section className="tz-band tz-band--alt">
            <div className="tz-band__head">
              <p className="tz-eyebrow tz-eyebrow--dark">THE ONEWORK™ PORTFOLIO</p>
              <h2 className="tz-h2">Nine sub-services, designed to run as one</h2>
              <p className="tz-muted">The assessment maps every gap to the ONEWORK™ service that closes it.</p>
            </div>
            <div className="tz-services">
              {ONEWORK_SERVICES.map((s, i) => (
                <div key={s.n} className="tz-service">
                  <span className="tz-service__num tz-mono">{String(i + 1).padStart(2, "0")}</span>
                  <div><strong>{s.n}</strong><span>{s.d}</span></div>
                </div>
              ))}
            </div>
          </section>

          <section className="tz-band" id="tz-offers">
            <div className="tz-band__head">
              <p className="tz-eyebrow tz-eyebrow--dark">ONEWORK™ ASSESSMENT PATHS</p>
              <h2 className="tz-h2">Start with clarity, not a contract</h2>
              <p className="tz-muted">Begin with the free, instant Pulse. Validate with Insight. Transform with Blueprint — the four-week Workplace Intelligence Assessment.</p>
            </div>
            <div className="tz-offers">
              {OFFERS.map((o) => (
                <article key={o.key} className={"tz-offer" + (o.featured ? " tz-offer--featured" : "")}>
                  {o.featured && <span className="tz-offer__ribbon">Most popular</span>}
                  <span className="tz-offer__badge tz-mono">{o.badge}</span>
                  <h3>{o.name}</h3>
                  <p>{o.output}</p>
                  <ul>
                    {o.specs.map((s) => <li key={s}><CheckCircle2 size={13} /> {s}</li>)}
                    <li className="tz-offer__effort"><Gauge size={13} /> {o.effort}</li>
                  </ul>
                  {o.cta === "start" ? (
                    <button className="tz-btn tz-btn--primary tz-btn--full" onClick={() => setScreen("details")}>Start Pulse <ArrowRight size={16} /></button>
                  ) : (
                    <button className="tz-btn tz-btn--ghost tz-btn--full" onClick={() => setBooking({ topic: o.name })}>
                      <CalendarDays size={15} /> Talk to an advisor
                    </button>
                  )}
                </article>
              ))}
            </div>
          </section>
        </>
      )}

      {screen === "details" && (
        <section className="tz-stage">
          <div className="tz-card tz-card--form">
            <p className="tz-eyebrow tz-eyebrow--dark">STEP 1 OF 3 · ABOUT YOU</p>
            <h2 className="tz-h2">Who is running this assessment?</h2>
            <p className="tz-muted">Your scorecard and gap report are personalised and addressed to you, and help Teceze route the right ONEWORK™ advisor. No production credentials or sensitive technical data are requested. Fields marked * are required.</p>
            <div className="tz-formgrid">
              <div className="tz-field">
                <label htmlFor="tz-name">Full name *</label>
                <input id="tz-name" type="text" value={client.name} placeholder="e.g. Priya Raman"
                  onChange={(e) => setClient({ ...client, name: e.target.value })} />
                {errors.name && <span className="tz-error">{errors.name}</span>}
              </div>
              <div className="tz-field">
                <label htmlFor="tz-email">Business email *</label>
                <input id="tz-email" type="email" value={client.email} placeholder="name@company.com"
                  onChange={(e) => setClient({ ...client, email: e.target.value })} />
                {errors.email && <span className="tz-error">{errors.email}</span>}
              </div>
              <div className="tz-field">
                <label htmlFor="tz-mobile">Mobile number *</label>
                <input id="tz-mobile" type="tel" value={client.mobile} placeholder="+44 7700 900123"
                  onChange={(e) => setClient({ ...client, mobile: e.target.value })} />
                {errors.mobile && <span className="tz-error">{errors.mobile}</span>}
              </div>
              <div className="tz-field">
                <label htmlFor="tz-role">Role title *</label>
                <input id="tz-role" type="text" value={client.role} placeholder="e.g. Head of Digital Workplace"
                  onChange={(e) => setClient({ ...client, role: e.target.value })} />
                {errors.role && <span className="tz-error">{errors.role}</span>}
              </div>
            </div>
            <div className="tz-actions">
              <button className="tz-btn tz-btn--ghost" onClick={() => setScreen("landing")}><ArrowLeft size={16} /> Back</button>
              <button className="tz-btn tz-btn--primary" onClick={toCompany}>Next: company profile <ArrowRight size={17} /></button>
            </div>
          </div>
        </section>
      )}

      {screen === "company" && (
        <section className="tz-stage">
          <div className="tz-card tz-card--form tz-card--form-wide">
            <p className="tz-eyebrow tz-eyebrow--dark">STEP 2 OF 3 · COMPANY PROFILE</p>
            <h2 className="tz-h2">Tell us about your workplace</h2>
            <p className="tz-muted">Teceze Claude benchmarks your spend and staffing against {company.industry || "industry"} standards and the ONEWORK™ 2026 reference target, so the gap report is sized to your organisation — not a generic template.</p>

            <div className="tz-formgrid">
              <div className="tz-field">
                <label htmlFor="tz-cname">Company name *</label>
                <input id="tz-cname" type="text" value={company.name} placeholder="e.g. Meridian Group"
                  onChange={(e) => setCompany({ ...company, name: e.target.value })} />
                {cErrors.name && <span className="tz-error">{cErrors.name}</span>}
              </div>
              <div className="tz-field">
                <label htmlFor="tz-industry">Industry *</label>
                <select id="tz-industry" value={company.industry}
                  onChange={(e) => setCompany({ ...company, industry: e.target.value })}>
                  <option value="">Select an industry…</option>
                  {INDUSTRIES.map((i) => <option key={i} value={i}>{i}</option>)}
                </select>
                {cErrors.industry && <span className="tz-error">{cErrors.industry}</span>}
              </div>
              <div className="tz-field">
                <label htmlFor="tz-region">Primary region *</label>
                <select id="tz-region" value={company.region}
                  onChange={(e) => setCompany({ ...company, region: e.target.value })}>
                  <option value="">Select a region…</option>
                  {REGIONS.map((r) => <option key={r} value={r}>{r}</option>)}
                </select>
                {cErrors.region && <span className="tz-error">{cErrors.region}</span>}
              </div>
              <div className="tz-field">
                <label htmlFor="tz-wm">Primary work model</label>
                <select id="tz-wm" value={company.workModel}
                  onChange={(e) => setCompany({ ...company, workModel: e.target.value })}>
                  {WORK_MODELS.map((w) => <option key={w} value={w}>{w}</option>)}
                </select>
              </div>
              <div className="tz-field">
                <label htmlFor="tz-emp">Total employees *</label>
                <input id="tz-emp" type="number" min="1" value={company.employees} placeholder="e.g. 4500"
                  onChange={(e) => setCompany({ ...company, employees: e.target.value })} />
                {cErrors.employees && <span className="tz-error">{cErrors.employees}</span>}
              </div>
              <div className="tz-field">
                <label htmlFor="tz-off">Number of offices / sites *</label>
                <input id="tz-off" type="number" min="1" value={company.offices} placeholder="e.g. 12"
                  onChange={(e) => setCompany({ ...company, offices: e.target.value })} />
                {cErrors.offices && <span className="tz-error">{cErrors.offices}</span>}
              </div>
              <div className="tz-field">
                <label htmlFor="tz-spend">Approx. annual spend on digital workplace services *</label>
                <div className="tz-moneyrow">
                  <select aria-label="Currency" value={company.currency}
                    onChange={(e) => setCompany({ ...company, currency: e.target.value })}>
                    {CURRENCIES.map((c) => <option key={c} value={c}>{c}</option>)}
                  </select>
                  <input id="tz-spend" type="number" min="0" value={company.spend} placeholder="e.g. 3500000"
                    onChange={(e) => setCompany({ ...company, spend: e.target.value })} />
                </div>
                {cErrors.spend && <span className="tz-error">{cErrors.spend}</span>}
              </div>
              <div className="tz-field">
                <label htmlFor="tz-window">Expected action window</label>
                <select id="tz-window" value={company.actionTiming}
                  onChange={(e) => setCompany({ ...company, actionTiming: e.target.value })}>
                  {ACTION_WINDOWS.map((w) => <option key={w} value={w}>{w}</option>)}
                </select>
              </div>
              <div className="tz-field">
                <label htmlFor="tz-dev">End-user devices supported (optional)</label>
                <input id="tz-dev" type="number" min="0" value={company.devices} placeholder="Laptops, desktops, mobiles…"
                  onChange={(e) => setCompany({ ...company, devices: e.target.value })} />
              </div>
              <div className="tz-field">
                <label htmlFor="tz-tix">Monthly IT ticket volume (optional)</label>
                <input id="tz-tix" type="number" min="0" value={company.tickets} placeholder="Incidents + requests"
                  onChange={(e) => setCompany({ ...company, tickets: e.target.value })} />
              </div>
              <div className="tz-field tz-field--wide">
                <label htmlFor="tz-tools">Current workplace platforms</label>
                <input id="tz-tools" type="text" value={company.currentTools} placeholder="Example: Microsoft 365, Intune, ServiceNow, Nexthink"
                  onChange={(e) => setCompany({ ...company, currentTools: e.target.value })} />
                <span className="tz-helper">List the major tools already in use. This helps distinguish platform gaps from adoption or operating-model gaps.</span>
              </div>
              <div className="tz-field tz-field--wide">
                <label htmlFor="tz-challenge">Primary workplace challenge</label>
                <textarea id="tz-challenge" rows={3} value={company.primaryChallenge} placeholder="What is the most important workplace issue or transformation objective?"
                  onChange={(e) => setCompany({ ...company, primaryChallenge: e.target.value })} />
              </div>
              <div className="tz-field">
                <label htmlFor="tz-impact">Current business impact of that challenge</label>
                <select id="tz-impact" value={company.businessImpact}
                  onChange={(e) => setCompany({ ...company, businessImpact: Number(e.target.value) })}>
                  {[1, 2, 3, 4, 5].map((v) => <option key={v} value={v}>{v} — {IMPACT_LABELS[v - 1]}</option>)}
                </select>
                <span className="tz-helper">Used only to prioritise the recommended next action.</span>
              </div>
              <div className="tz-field">
                <label>Relationship</label>
                <button type="button" className={"tz-toggle" + (company.existingCustomer ? " tz-toggle--on" : "")}
                  aria-pressed={company.existingCustomer}
                  onClick={() => setCompany({ ...company, existingCustomer: !company.existingCustomer })}>
                  <i /><span>Existing Teceze customer</span>
                </button>
              </div>
            </div>

            <p className="tz-subhead">Workplace IT team — FTEs by role *</p>
            <p className="tz-muted tz-muted--sm">Everyone supporting workplace services: service desk, field technicians, engineering, managers, asset management and others. Enter 0 where a role doesn't exist.</p>
            <div className="tz-formgrid tz-formgrid--three">
              {IT_FIELDS.map((f) => (
                <div className="tz-field" key={f.key}>
                  <label htmlFor={"tz-" + f.key}>{f.label}</label>
                  <input id={"tz-" + f.key} type="number" min="0" value={company[f.key]} placeholder="0"
                    onChange={(e) => setCompany({ ...company, [f.key]: e.target.value })} />
                </div>
              ))}
            </div>
            {cErrors.it && <span className="tz-error">{cErrors.it}</span>}

            {(bench.itTotal > 0 || bench.spendPerUserLocal > 0) && (
              <div className="tz-live">
                {bench.itTotal > 0 && (
                  <span className="tz-status tz-status--info">
                    {bench.itTotal} workplace IT FTEs{bench.employees > 0 ? ` · 1 per ${Math.round(bench.employees / bench.itTotal)} employees` : ""}
                  </span>
                )}
                {bench.spendPerUserLocal > 0 && (
                  <span className="tz-status tz-status--info">≈ {fmtMoney(bench.spendPerUserLocal, company.currency)} per employee / year</span>
                )}
                {company.industry && bench.metrics.filter((m) => m.id === "spend" || m.id === "it").map((m) => (
                  <span key={m.id} className={"tz-status tz-status--" + m.tone}>{m.statusLabel} for {company.industry}</span>
                ))}
              </div>
            )}
            {company.industry && (
              <p className="tz-muted tz-muted--sm" style={{ marginTop: 10 }}>
                Typical for {company.industry}: ${bench.bm.spendPerUser[0].toLocaleString()}–${bench.bm.spendPerUser[1].toLocaleString()} spend per employee (USD) · 1 workplace IT FTE per {bench.bm.usersPerIT[0]}–{bench.bm.usersPerIT[1]} employees.
              </p>
            )}

            <div className="tz-consents">
              <label className="tz-consent-row">
                <input type="checkbox" checked={company.privacyConsent}
                  onChange={(e) => setCompany({ ...company, privacyConsent: e.target.checked })} />
                <span>I agree that Teceze may process the submitted information to generate the assessment result and contact me about validation or improvement actions. <b>Required.</b></span>
              </label>
              <label className="tz-consent-row">
                <input type="checkbox" checked={company.benchmarkConsent}
                  onChange={(e) => setCompany({ ...company, benchmarkConsent: e.target.checked })} />
                <span>Teceze may use anonymised and aggregated assessment data to improve future ONEWORK™ reference benchmarks. No organisation or individual will be identified.</span>
              </label>
              {cErrors.consent && <span className="tz-error">{cErrors.consent}</span>}
            </div>

            <div className="tz-actions">
              <button className="tz-btn tz-btn--ghost" onClick={() => setScreen("details")}><ArrowLeft size={16} /> Back</button>
              <button className="tz-btn tz-btn--primary" onClick={startAssessment}>Begin the 24-question Pulse <ArrowRight size={17} /></button>
            </div>
          </div>
        </section>
      )}

      {screen === "assess" && pillar && (
        <section className="tz-stage">
          <div className="tz-assess-top">
            <div className="tz-pillar-tabs" role="tablist" aria-label="Assessment pillars">
              {PILLARS.map((p, i) => {
                const done = p.questions.every((q) => answers[q.id]);
                return (
                  <button key={p.id} role="tab" aria-selected={i === pillarIdx}
                    className={"tz-tab" + (i === pillarIdx ? " tz-tab--active" : "") + (done ? " tz-tab--done" : "")}
                    onClick={() => setPillarIdx(i)}>
                    {done ? <CheckCircle2 size={13} /> : <span className="tz-tab__dot" />} {p.short}
                  </button>
                );
              })}
            </div>
            <Spectrum score={scores.overall} compact />
          </div>

          <div className="tz-card">
            <p className="tz-eyebrow tz-eyebrow--dark">STEP 3 OF 3 · PILLAR {pillarIdx + 1} OF {PILLARS.length}</p>
            <h2 className="tz-h2">{pillar.name}</h2>
            <p className="tz-muted">{pillar.tagline}</p>
            <p className="tz-scalehelp tz-mono">1 = reactive and ad-hoc · 3 = integrated and consistently managed · 5 = governed, autonomous and measurable</p>

            {pillar.questions.map((q, qi) => (
              <fieldset key={q.id} className="tz-question">
                <legend className="tz-question__text"><span className="tz-mono tz-question__num">{String(qi + 1).padStart(2, "0")}</span> {q.text}</legend>
                <div className="tz-options">
                  {q.options.map((opt, oi) => {
                    const val = oi + 1;
                    const selected = answers[q.id] === val;
                    return (
                      <button key={oi} type="button" aria-pressed={selected}
                        className={"tz-option" + (selected ? " tz-option--selected" : "")}
                        onClick={() => setAnswers({ ...answers, [q.id]: val })}>
                        <span className={"tz-option__level tz-option__level--" + val}>{val}</span>
                        <span className="tz-option__text">{opt}</span>
                      </button>
                    );
                  })}
                </div>
              </fieldset>
            ))}

            <div className="tz-evidence">
              <div className="tz-evidence__copy">
                <h4>Evidence confidence for this pillar</h4>
                <p>How strongly can the responses above be supported by current policies, reports, dashboards or platform telemetry? Optional — unanswered pillars default to self-reported (25%).</p>
              </div>
              <div className="tz-evidence__opts" role="radiogroup" aria-label={"Evidence confidence for " + pillar.name}>
                {EVIDENCE_OPTIONS.map((o) => {
                  const selected = evidence[pillar.id] === o.score;
                  return (
                    <button key={o.score} type="button" aria-pressed={selected}
                      className={"tz-evidence__opt" + (selected ? " tz-evidence__opt--selected" : "")}
                      onClick={() => setEvidence({ ...evidence, [pillar.id]: o.score })}>
                      <b className="tz-mono">{o.score}%</b><span>{o.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="tz-actions">
              <button className="tz-btn tz-btn--ghost" onClick={() => (pillarIdx === 0 ? setScreen("company") : setPillarIdx(pillarIdx - 1))}>
                <ArrowLeft size={16} /> Back
              </button>
              {pillarIdx < PILLARS.length - 1 ? (
                <button className="tz-btn tz-btn--primary" disabled={!pillarComplete} onClick={() => setPillarIdx(pillarIdx + 1)}>
                  Next: {PILLARS[pillarIdx + 1].short} <ArrowRight size={17} />
                </button>
              ) : (
                <button className="tz-btn tz-btn--primary" disabled={answeredCount < TOTAL_QUESTIONS} onClick={finish}>
                  <Sparkles size={16} /> Generate my ONEWORK™ scorecard
                </button>
              )}
            </div>
            {!pillarComplete && <p className="tz-hint">Answer all {pillar.questions.length} questions in this pillar to continue.</p>}
          </div>
        </section>
      )}

      {screen === "generating" && (
        <section className="tz-stage tz-stage--center">
          <div className="tz-card tz-card--gen">
            <div className="tz-orb" aria-hidden="true"><Sparkles size={26} /></div>
            <h2 className="tz-h2">Teceze Claude is analysing your workplace</h2>
            <p className="tz-muted">Building {company.name ? company.name + "'s" : "your"} ONEWORK™ scorecard and gap report — this takes under a minute.</p>
            <ul className="tz-gensteps">
              {GEN_STEPS.map((s, i) => (
                <li key={s} className={i < genStep ? "done" : i === genStep ? "active" : ""}>
                  {i < genStep ? <CheckCircle2 size={15} /> : <span className="tz-genstep__dot" />} {s}
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {screen === "results" && report && extras && (
        <section className="tz-stage tz-stage--wide">
          <div className="tz-result-toolbar">
            <button className="tz-backlink" onClick={restart}><RefreshCw size={14} /> Start another assessment</button>
            <button className="tz-btn tz-btn--primary" onClick={() => downloadReport(client, company, scores, report, extras)}>
              <Download size={16} /> Download full report
            </button>
          </div>

          <div className="tz-results-hero">
            <div className="tz-results-hero__gauge">
              <Dial score={extras.overall100} size="lg" label="ONEWORK™ MATURITY" dark />
            </div>
            <div>
              <p className="tz-eyebrow">PULSE RESULT · {new Date().toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })}</p>
              <h2 className="tz-results-hero__title">{getLevel(scores.overall).name}</h2>
              <p className="tz-results-hero__sub">{getLevel(scores.overall).blurb}</p>
              <div className="tz-results-hero__meta">
                <span>{company.name}</span><span>{company.industry}</span><span>{company.region}</span><span>{client.name} · {client.role}</span>
              </div>
              <p className="tz-autodl">{aiUsed ? "Generated by Teceze Claude." : "Generated with Teceze's offline analysis engine (AI service unreachable)."} Your report downloaded automatically — open it in any browser or print to PDF.</p>
            </div>
          </div>

          <div className="tz-kpis">
            <div className="tz-kpi"><span className="tz-mono">REFERENCE ALIGNMENT</span><strong>{extras.alignment}%</strong><p>vs the ONEWORK™ 2026 reference target (75/100)</p></div>
            <div className="tz-kpi"><span className="tz-mono">EVIDENCE CONFIDENCE</span><strong>{extras.evidencePct}%</strong><p>{evidenceLabel(extras.evidencePct)}</p></div>
            <div className="tz-kpi"><span className="tz-mono">SAVINGS POTENTIAL</span><strong>10–20%</strong><p>{bench.spend > 0 ? `≈ ${fmtMoney(bench.spend * 0.1, company.currency)}–${fmtMoney(bench.spend * 0.2, company.currency)} of annual spend` : "unit-cost opportunity"}</p></div>
            <div className="tz-kpi"><span className="tz-mono">RECOMMENDED NEXT STAGE</span><strong className="tz-kpi__small">{extras.rec.name.split(" — ")[0]}</strong><p>Based on maturity, evidence and account context</p></div>
          </div>

          <div className="tz-card">
            <div className="tz-card__head">
              <div><h3 className="tz-h3">Workplace maturity profile</h3><p className="tz-muted">Pillar scores show where capabilities are relatively strong and where integration, automation or governance should be prioritised.</p></div>
              <span className="tz-mono tz-card__tag">6 PILLARS</span>
            </div>
            <div className="tz-profilegrid">
              <div className="tz-radarwrap"><Radar pillars={extras.pillars100} /></div>
              <div>
                <div className="tz-scorecard">
                  {extras.pillars100.map((p) => (
                    <div key={p.id} className="tz-scorecard__row">
                      <span className="tz-scorecard__name">{p.short}</span>
                      <div className="tz-scorecard__bar"><div style={{ width: `${p.s100}%` }} /></div>
                      <span className="tz-mono tz-scorecard__val">{p.s100}</span>
                    </div>
                  ))}
                </div>
                <Spectrum score={scores.overall} compact />
              </div>
            </div>
          </div>

          {bench.metrics.length > 0 && (
            <div className="tz-card">
              <h3 className="tz-h3">How {company.name} compares · {company.industry || "industry"} benchmarks</h3>
              <div className="tz-bench">
                {bench.metrics.map((m) => (
                  <div key={m.id} className="tz-bench__tile">
                    <span className="tz-bench__value tz-mono">{m.display}</span>
                    <span className="tz-bench__label">{m.label}</span>
                    <span className="tz-bench__range">Typical: {m.range}</span>
                    <span className={"tz-status tz-status--" + m.tone}>{m.statusLabel}</span>
                    <p className="tz-bench__note">{m.note}</p>
                  </div>
                ))}
              </div>
              <p className="tz-muted tz-muted--sm" style={{ marginTop: 12 }}>
                Indicative industry ranges in USD; non-USD spend converted at approximate rates. The ONEWORK™ comparison is a reference-target view, not an audited industry benchmark.
              </p>
            </div>
          )}

          <div className="tz-card">
            <h3 className="tz-h3">Executive summary</h3>
            <p className="tz-body">{report.executiveSummary}</p>
            {report.maturitySnapshot && <p className="tz-muted tz-italic">{report.maturitySnapshot}</p>}
          </div>

          <div className="tz-card">
            <div className="tz-card__head">
              <div><h3 className="tz-h3">What the assessment is telling you</h3><p className="tz-muted">Protect what is working, integrate fragmented capabilities and focus transformation on the areas with the highest maturity gap.</p></div>
              <span className="tz-mono tz-card__tag">CUSTOMER ACTION VIEW</span>
            </div>
            <div className="tz-triad">
              <article className="tz-col tz-col--strength">
                <div className="tz-col__head"><ShieldCheck size={15} /><span className="tz-mono">PROTECT &amp; SCALE</span></div>
                <h4>What is already working</h4>
                <div className="tz-insights">
                  {extras.pillars100.slice().sort((a, b) => b.s100 - a.s100).slice(0, 2).map((p) => (
                    <div key={p.id} className="tz-insight"><b>{p.name}</b><span>{p.s100}/100 · {getLevel(p.score).name}</span></div>
                  ))}
                </div>
              </article>
              <article className="tz-col tz-col--challenge">
                <div className="tz-col__head"><Layers size={15} /><span className="tz-mono">IMPROVE &amp; INTEGRATE</span></div>
                <h4>Current setup challenges</h4>
                <div className="tz-insights">
                  {(report.pillars || []).slice(0, 2).map((p) => (
                    <div key={p.name} className="tz-insight"><b>{p.name}</b><span>{(p.keyGaps && p.keyGaps[0]) || p.currentState}</span></div>
                  ))}
                </div>
              </article>
              <article className="tz-col tz-col--priority">
                <div className="tz-col__head"><Zap size={15} /><span className="tz-mono">TRANSFORM &amp; DIFFERENTIATE</span></div>
                <h4>Recommended 90-day priorities</h4>
                <div className="tz-insights">
                  {(report.quickWins || []).slice(0, 3).map((q, i) => (
                    <div key={i} className="tz-insight"><b>{i + 1}. {q}</b></div>
                  ))}
                </div>
              </article>
            </div>
          </div>

          <div className="tz-card">
            <h3 className="tz-h3">Gap analysis by pillar</h3>
            <div className="tz-pillar-report">
              {report.pillars.map((p, idx) => {
                const def = PILLARS.find((d) => d.name === p.name);
                return (
                  <details key={p.name} className="tz-detail" open={idx === 0}>
                    <summary>{p.name}</summary>
                    <p className="tz-body"><strong className="tz-accent-b">Current state —</strong> {p.currentState}</p>
                    <p className="tz-body"><strong className="tz-accent-c">AI-driven target —</strong> {p.targetState}</p>
                    <p className="tz-label tz-label--amber">Key gaps</p>
                    <ul className="tz-ul">{(p.keyGaps || []).map((g, i) => <li key={i}>{g}</li>)}</ul>
                    <p className="tz-label tz-label--green">Recommendations</p>
                    <ul className="tz-ul">{(p.recommendations || []).map((r, i) => <li key={i}>{r}</li>)}</ul>
                    {def && <p className="tz-services-line"><b>ONEWORK™ services:</b> {def.services.join(" · ")}</p>}
                  </details>
                );
              })}
            </div>
          </div>

          <div className="tz-card">
            <div className="tz-card__head">
              <div><h3 className="tz-h3">Alignment with the ONEWORK™ 2026 reference target</h3><p className="tz-muted">A reference-target comparison, not an audited industry benchmark. Insight and Blueprint validation increase confidence through evidence and telemetry.</p></div>
            </div>
            <div className="tz-tablewrap">
              <table className="tz-trend">
                <thead><tr><th>Pillar</th><th>Score</th><th>Alignment</th><th>Recommended improvement</th></tr></thead>
                <tbody>
                  {extras.pillars100.map((p) => {
                    const [lbl, cls] = refPill(p.s100);
                    const rp = (report.pillars || []).find((x) => x.name === p.name);
                    return (
                      <tr key={p.id}>
                        <td>{p.name}</td>
                        <td className="tz-mono"><b>{p.s100}/100</b></td>
                        <td><span className={"tz-pill tz-pill--" + cls}>{lbl}</span></td>
                        <td>{(rp && rp.recommendations && rp.recommendations[0]) || "Baseline and define XLA targets"}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>

          <div className="tz-twocol">
            <div className="tz-card">
              <h3 className="tz-h3">Quick wins · first 90 days</h3>
              <ul className="tz-ul tz-ul--check">{(report.quickWins || []).map((q, i) => <li key={i}><CheckCircle2 size={15} /> {q}</li>)}</ul>
            </div>
            <div className="tz-card">
              <h3 className="tz-h3">Projected business impact</h3>
              <div className="tz-impact">
                <div><span>Cost savings</span><p>{report.businessImpact?.costSavings}</p></div>
                <div><span>CSAT uplift</span><p>{report.businessImpact?.csat}</p></div>
                <div><span>Efficiency &amp; agility</span><p>{report.businessImpact?.efficiency}</p></div>
                <div><span>Experience</span><p>{report.businessImpact?.experience}</p></div>
              </div>
              <p className="tz-muted tz-muted--sm" style={{ marginTop: 10 }}>Illustrative targets — every business case is built from your validated baselines.</p>
            </div>
          </div>

          <div className="tz-card">
            <h3 className="tz-h3">Transformation roadmap</h3>
            <div className="tz-roadmap">
              {(report.roadmap || []).map((ph) => (
                <div key={ph.phase} className="tz-phase">
                  <p className="tz-mono tz-phase__name">{ph.phase}</p>
                  <p className="tz-phase__focus">{ph.focus}</p>
                  <ul className="tz-ul">{(ph.initiatives || []).map((i, k) => <li key={k}>{i}</li>)}</ul>
                </div>
              ))}
            </div>
          </div>

          <div className="tz-nextstep">
            <div>
              <p className="tz-eyebrow">RECOMMENDED NEXT STEP</p>
              <h3>{extras.rec.name}</h3>
              <p>{extras.rec.action} Priority capability gap: <b>{extras.priorityGap ? extras.priorityGap.name : "—"}</b>.</p>
              <div className="tz-journey tz-mono">
                <span>ASSESS</span><i>→</i><span>ARCHITECT</span><i>→</i><span>TRANSFORM</span><i>→</i><span>OPERATE &amp; OPTIMISE</span>
              </div>
            </div>
            <div className="tz-nextstep__actions">
              <button className="tz-btn tz-btn--light" onClick={() => setBooking({ topic: extras.rec.name.split(" — ")[0] })}>
                <CalendarDays size={16} /> Book a Teams meeting
              </button>
              <button className="tz-btn tz-btn--ghost tz-btn--ghost-light" onClick={() => downloadReport(client, company, scores, report, extras)}>
                <Download size={15} /> Download report again
              </button>
            </div>
          </div>
          <p className="tz-disclaimer">This Pulse result is indicative and self-reported. Evidence confidence: {extras.evidencePct}%. Insight and Blueprint validation increase confidence through evidence and telemetry.</p>
        </section>
      )}

      {booking && (
        <div className="tz-modal-overlay" role="dialog" aria-modal="true" aria-label="Book a Microsoft Teams meeting" onClick={() => setBooking(null)}>
          <div className="tz-modal" onClick={(e) => e.stopPropagation()}>
            <button className="tz-modal__close" onClick={() => setBooking(null)} aria-label="Close"><X size={16} /></button>
            <p className="tz-eyebrow tz-eyebrow--dark">MICROSOFT TEAMS · BOOK A CONSULTANT</p>
            <h3 className="tz-h3">{booking.topic ? `Book a meeting — ${booking.topic}` : "Book a meeting with a Teceze consultant"}</h3>
            <p className="tz-muted tz-muted--sm">Pick a Teceze consultant and choose a slot in their calendar. The booking opens in Microsoft Bookings, and a Teams meeting invitation is added to both calendars automatically.</p>
            <div className="tz-consultants">
              {CONSULTANTS.map((c) => (
                <div key={c.name} className="tz-consultant">
                  <span className="tz-consultant__avatar" aria-hidden="true">{initials(c.name)}</span>
                  <div className="tz-consultant__info">
                    <strong>{c.name}</strong>
                    <span>{c.role} · {c.region}</span>
                    <span className="tz-consultant__meta tz-mono">{c.focus}</span>
                  </div>
                  <a className="tz-btn tz-btn--primary tz-btn--sm" href={c.bookingUrl} target="_blank" rel="noopener noreferrer">
                    <Video size={15} /> Book on Teams
                  </a>
                </div>
              ))}
            </div>
            <p className="tz-modal__foot">
              Prefer email? <a href={extras ? bookMailto : advisorMailto(`${(booking.topic || "ONEWORK™")} enquiry`, "Dear Teceze team,\n\nWe would like to book a consultation.\n\nKind regards")}><Mail size={12} /> sales@teceze.com</a> — we'll come back within one business day.
            </p>
          </div>
        </div>
      )}

      <footer className="tz-footer">
        <span className="tz-footer__brand"><img src={LOGO} alt="Teceze" /> © {new Date().getFullYear()} Teceze · ONEWORK™ Digital Workplace Services · sales@teceze.com</span>
        <span className="tz-mono">Powered by Teceze Claude</span>
      </footer>
    </div>
  );
}

/* ————— styles: TECEZE ONEWORK™ design system ————— */
const StyleTag = () => (
  <style>{`
  @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600&family=Manrope:wght@400;500;600;700;800&family=IBM+Plex+Mono:wght@500;600&display=swap');

  .tz-root { --paper:#EEF3F8; --card:#FFFFFF; --ink:#101820; --ink-soft:#47586B; --ink-faint:#A9B6C7;
    --panel:#071426; --panel-raised:#0B1F3A; --signal:#0066FF; --signal-strong:#0052CC; --signal-soft:#00D9FF;
    --signal-wash:rgba(0,102,255,.10); --viz:#18C8E8; --ice:#DDF7FF; --line:#D7E2ED; --line-dark:rgba(255,255,255,.13);
    --good:#1E9E6B; --good-wash:rgba(30,158,107,.12); --warn:#B08A2E; --warn-wash:rgba(176,138,46,.14);
    --risk:#A3402F; --risk-wash:rgba(163,64,47,.12);
    --grad:linear-gradient(90deg,#8A9BAE 0%,#18C8E8 55%,#0066FF 100%);
    font-family:'Manrope','Segoe UI',system-ui,sans-serif; background:var(--paper); color:#22314A;
    min-height:100vh; display:flex; flex-direction:column; line-height:1.55; }
  .tz-root * { box-sizing:border-box; }
  .tz-mono { font-family:'IBM Plex Mono',ui-monospace,monospace; }
  .tz-grad-text { background:linear-gradient(90deg,#00D9FF,#18C8E8 40%,#5C9DFF); -webkit-background-clip:text; background-clip:text; color:transparent; }
  h1,h2,h3 { font-family:'Fraunces','Manrope',serif; font-weight:600; }

  .tz-header { background:var(--panel); color:#fff; padding:13px 28px; display:flex; align-items:center; justify-content:space-between; gap:18px; position:sticky; top:0; z-index:20; border-bottom:1px solid var(--line-dark); }
  .tz-logo { height:22px; display:block; }
  .tz-header__brand { display:flex; align-items:center; gap:12px; }
  .tz-header__divider { width:1px; height:18px; background:rgba(255,255,255,.25); }
  .tz-header__product { font-size:13px; color:var(--ink-faint); }
  .tz-header__progress { display:flex; align-items:center; gap:10px; font-size:12px; color:var(--signal-soft); }
  .tz-progressbar { width:140px; height:6px; border-radius:99px; background:rgba(255,255,255,.15); overflow:hidden; }
  .tz-progressbar div { height:100%; background:var(--grad); border-radius:99px; transition:width .35s ease; }

  /* hero */
  .tz-hero { background:radial-gradient(1100px 600px at 85% -10%, rgba(0,102,255,.38), transparent 60%),
             radial-gradient(800px 500px at -10% 110%, rgba(24,200,232,.20), transparent 55%), var(--panel);
    color:#fff; padding:62px 28px 70px; display:grid; grid-template-columns:1.5fr 1fr; gap:48px; align-items:center; }
  .tz-hero__inner { max-width:660px; margin-left:auto; }
  .tz-eyebrow { font-family:'IBM Plex Mono',monospace; font-size:11.5px; letter-spacing:.2em; color:var(--signal-soft); margin:0 0 14px; }
  .tz-eyebrow--dark { color:var(--signal); }
  .tz-hero__title { font-size:clamp(30px,4vw,46px); line-height:1.14; margin:0 0 18px; color:#fff; }
  .tz-hero__sub { color:var(--ink-faint); font-size:16px; margin:0 0 22px; max-width:60ch; }
  .tz-pillars-chips { display:flex; flex-wrap:wrap; gap:8px; margin-bottom:26px; }
  .tz-chip { display:inline-flex; align-items:center; gap:6px; font-size:12.5px; padding:6px 12px; border-radius:999px; border:1px solid rgba(255,255,255,.22); color:#DCE9F7; background:rgba(255,255,255,.05); }
  .tz-hero__spectrum { margin-bottom:28px; }
  .tz-spectrum__caption { font-size:12.5px; color:var(--signal-soft); margin:0 0 8px; font-family:'IBM Plex Mono',monospace; }
  .tz-hero__cta { display:flex; align-items:center; gap:18px; flex-wrap:wrap; }
  .tz-hero__meta { display:inline-flex; align-items:center; gap:6px; font-size:13px; color:var(--ink-faint); }
  .tz-hero__panel { max-width:380px; width:100%; }
  .tz-hero__dialcard { background:rgba(255,255,255,.06); border:1px solid var(--line-dark); border-radius:18px; padding:20px 22px; backdrop-filter:blur(4px); }
  .tz-hero__topline { display:flex; justify-content:space-between; font-family:'IBM Plex Mono',monospace; font-size:11px; letter-spacing:.1em; color:rgba(255,255,255,.5); margin-bottom:6px; }
  .tz-hero__metrics { display:flex; flex-direction:column; gap:8px; margin-top:8px; }
  .tz-hero__metrics div { display:flex; justify-content:space-between; align-items:center; font-size:13px; color:var(--ink-faint); border-top:1px solid var(--line-dark); padding-top:8px; }
  .tz-hero__metrics strong { font-family:'IBM Plex Mono',monospace; font-size:15px; color:#fff; }

  /* proof strip & bands */
  .tz-proof { background:var(--panel-raised); color:#fff; display:flex; flex-wrap:wrap; justify-content:center; gap:8px 42px; padding:18px 28px; border-top:1px solid var(--line-dark); }
  .tz-proof__item { display:flex; flex-direction:column; align-items:center; padding:6px 0; }
  .tz-proof__item strong { font-size:19px; color:var(--signal-soft); }
  .tz-proof__item span { font-size:11.5px; color:var(--ink-faint); letter-spacing:.03em; }
  .tz-band { max-width:1080px; margin:0 auto; padding:54px 24px 10px; width:100%; }
  .tz-band--alt { padding-top:34px; }
  .tz-band__head { max-width:760px; margin-bottom:26px; }
  .tz-band__grid { display:grid; grid-template-columns:repeat(auto-fit,minmax(220px,1fr)); gap:14px; }
  .tz-band__tile { background:var(--card); border:1px solid var(--line); border-radius:16px; padding:18px 20px; display:flex; flex-direction:column; gap:6px; }
  .tz-band__tile strong { font-size:26px; color:var(--signal); }
  .tz-band__tile span { font-size:13.5px; color:#33435C; }
  .tz-band__tile em { font-size:11px; color:#7B8BA1; font-style:normal; font-family:'IBM Plex Mono',monospace; }
  .tz-services { display:grid; grid-template-columns:repeat(auto-fit,minmax(300px,1fr)); gap:12px; }
  .tz-service { background:var(--card); border:1px solid var(--line); border-radius:14px; padding:14px 16px; display:flex; gap:12px; align-items:flex-start; }
  .tz-service__num { color:var(--signal); font-weight:600; font-size:13px; margin-top:2px; }
  .tz-service strong { display:block; font-size:14px; color:var(--ink); }
  .tz-service span { font-size:12.5px; color:var(--ink-soft); }

  /* offers */
  .tz-offers { display:grid; grid-template-columns:repeat(auto-fit,minmax(280px,1fr)); gap:18px; padding-bottom:56px; }
  .tz-offer { position:relative; background:var(--card); border:1px solid var(--line); border-radius:18px; padding:24px; display:flex; flex-direction:column; gap:10px; box-shadow:0 10px 26px rgba(18,20,28,.06); }
  .tz-offer--featured { border:2px solid var(--signal); box-shadow:0 24px 60px rgba(0,102,255,.14); }
  .tz-offer__ribbon { position:absolute; top:-11px; right:18px; background:var(--signal); color:#fff; font-size:11px; font-weight:700; padding:3px 12px; border-radius:999px; letter-spacing:.04em; }
  .tz-offer__badge { font-size:10.5px; letter-spacing:.14em; color:var(--signal); font-weight:600; }
  .tz-offer h3 { margin:0; font-size:21px; color:var(--ink); }
  .tz-offer > p { margin:0; font-size:13.5px; color:var(--ink-soft); min-height:42px; }
  .tz-offer ul { list-style:none; margin:4px 0 8px; padding:0; display:flex; flex-direction:column; gap:7px; }
  .tz-offer li { display:flex; gap:8px; align-items:flex-start; font-size:13px; color:#33435C; }
  .tz-offer li svg { color:var(--good); flex-shrink:0; margin-top:2px; }
  .tz-offer__effort svg { color:var(--signal) !important; }
  .tz-btn--full { width:100%; justify-content:center; margin-top:auto; text-decoration:none; }

  /* stage & cards */
  .tz-stage { flex:1; width:100%; max-width:980px; margin:0 auto; padding:34px 22px 60px; }
  .tz-stage--wide { max-width:1080px; }
  .tz-stage--center { display:flex; align-items:center; justify-content:center; }
  .tz-card { background:var(--card); border:1px solid var(--line); border-radius:18px; padding:30px 34px; margin-bottom:22px; box-shadow:0 10px 26px rgba(18,20,28,.05); }
  .tz-card__head { display:flex; justify-content:space-between; align-items:flex-start; gap:16px; flex-wrap:wrap; }
  .tz-card__tag { font-size:10.5px; letter-spacing:.14em; color:var(--ink-soft); border:1px solid var(--line); border-radius:999px; padding:5px 12px; white-space:nowrap; }
  .tz-h2 { font-size:26px; margin:6px 0 8px; color:var(--ink); }
  .tz-h3 { font-size:19px; margin:0 0 14px; color:var(--ink); }
  .tz-muted { color:var(--ink-soft); margin:0 0 10px; font-size:15px; }
  .tz-muted--sm { font-size:13px; }
  .tz-body { font-size:15px; margin:6px 0; }
  .tz-italic { font-style:italic; }
  .tz-helper { font-size:12px; color:#7B8BA1; }
  .tz-scalehelp { font-size:11.5px; color:#7B8BA1; letter-spacing:.02em; margin:2px 0 0; }

  /* forms */
  .tz-card--form { max-width:640px; margin:0 auto; }
  .tz-card--form-wide { max-width:800px; }
  .tz-formgrid { display:grid; grid-template-columns:1fr 1fr; gap:18px 20px; margin-top:20px; }
  .tz-field { display:flex; flex-direction:column; gap:6px; }
  .tz-field--wide { grid-column:1 / -1; }
  .tz-field label { font-size:13px; font-weight:600; color:var(--ink); }
  .tz-field input, .tz-field select, .tz-field textarea { border:1.5px solid var(--line); border-radius:10px; padding:11px 13px; font-size:15px; font-family:inherit; background:#FBFDFF; color:#22314A; transition:border-color .15s; }
  .tz-field textarea { resize:vertical; }
  .tz-field select { cursor:pointer; }
  .tz-field input:focus, .tz-field select:focus, .tz-field textarea:focus { outline:none; border-color:var(--signal); box-shadow:0 0 0 3px var(--signal-wash); }
  .tz-error { color:#B4232C; font-size:12.5px; }
  .tz-moneyrow { display:flex; gap:8px; }
  .tz-moneyrow select { flex:0 0 86px; }
  .tz-moneyrow input { flex:1; min-width:0; }
  .tz-formgrid--three { grid-template-columns:repeat(3,1fr); margin-top:12px; }
  .tz-subhead { font-family:'Fraunces',serif; font-weight:600; font-size:16px; color:var(--ink); margin:28px 0 4px; }
  .tz-toggle { display:flex; align-items:center; gap:10px; border:1.5px solid var(--line); background:#FBFDFF; border-radius:10px; padding:10px 13px; cursor:pointer; font-family:inherit; font-size:14px; color:#33435C; }
  .tz-toggle i { width:34px; height:19px; border-radius:999px; background:#C7D3E2; position:relative; flex-shrink:0; transition:background .15s; }
  .tz-toggle i::after { content:""; position:absolute; top:2.5px; left:3px; width:14px; height:14px; border-radius:50%; background:#fff; transition:left .15s; }
  .tz-toggle--on { border-color:var(--signal); }
  .tz-toggle--on i { background:var(--signal); }
  .tz-toggle--on i::after { left:17px; }
  .tz-consents { margin-top:22px; display:flex; flex-direction:column; gap:10px; border-top:1px solid var(--line); padding-top:18px; }
  .tz-consent-row { display:flex; gap:10px; align-items:flex-start; font-size:12.5px; color:#47586B; cursor:pointer; }
  .tz-consent-row input { margin-top:2px; accent-color:var(--signal); width:16px; height:16px; flex-shrink:0; }

  /* buttons */
  .tz-btn { display:inline-flex; align-items:center; gap:8px; font-family:'Manrope',sans-serif; font-weight:700; font-size:14.5px; padding:12px 22px; border-radius:10px; border:none; cursor:pointer; transition:transform .12s ease, box-shadow .12s ease, background .15s; text-decoration:none; }
  .tz-btn:focus-visible { outline:3px solid var(--viz); outline-offset:2px; }
  .tz-btn--primary { background:var(--signal); color:#fff; box-shadow:0 8px 20px rgba(0,102,255,.30); }
  .tz-btn--primary:hover:not(:disabled) { background:var(--signal-strong); transform:translateY(-1px); }
  .tz-btn--primary:disabled { opacity:.45; cursor:not-allowed; box-shadow:none; }
  .tz-btn--ghost { background:transparent; color:#44536B; border:1.5px solid var(--line); }
  .tz-btn--ghost:hover { border-color:#AFC0D4; }
  .tz-btn--ghost-light { color:#DCE9F7; border-color:rgba(255,255,255,.3); }
  .tz-btn--light { background:#fff; color:var(--panel); }
  .tz-actions { display:flex; justify-content:space-between; align-items:center; gap:14px; margin-top:26px; flex-wrap:wrap; }
  .tz-hint { font-size:12.5px; color:#7B8BA1; margin:10px 0 0; text-align:right; }
  .tz-live { display:flex; flex-wrap:wrap; gap:8px; margin-top:18px; }
  .tz-status { display:inline-flex; align-items:center; font-size:12px; font-weight:700; padding:5px 11px; border-radius:999px; }
  .tz-status--good { background:var(--good-wash); color:var(--good); }
  .tz-status--warn { background:var(--warn-wash); color:var(--warn); }
  .tz-status--info { background:#E8EFF7; color:#44536B; }

  /* spectrum */
  .tz-spectrum__track { position:relative; height:12px; border-radius:99px; background:var(--grad); box-shadow:inset 0 0 0 1px rgba(255,255,255,.15); }
  .tz-spectrum__marker { position:absolute; top:50%; transform:translate(-50%,-50%); width:22px; height:22px; border-radius:50%; background:#fff; border:3px solid var(--panel); box-shadow:0 2px 10px rgba(0,0,0,.35); transition:left .4s ease; }
  .tz-spectrum__value { position:absolute; top:-30px; left:50%; transform:translateX(-50%); background:#fff; color:var(--panel); font-family:'IBM Plex Mono',monospace; font-size:11.5px; font-weight:600; padding:2px 7px; border-radius:6px; box-shadow:0 2px 8px rgba(7,20,38,.25); }
  .tz-spectrum__labels { display:flex; justify-content:space-between; font-size:11px; letter-spacing:.04em; margin-top:8px; color:#8FA0B8; font-family:'IBM Plex Mono',monospace; }
  .tz-spectrum__ai { color:var(--signal-soft); font-weight:600; }
  .tz-card .tz-spectrum__labels { color:#7B8BA1; }
  .tz-card .tz-spectrum__ai { color:var(--signal); }
  .tz-spectrum--compact { min-width:260px; flex:1; }
  .tz-spectrum--compact .tz-spectrum__track { height:9px; }
  .tz-spectrum--compact .tz-spectrum__marker { width:17px; height:17px; border-width:2px; }
  .tz-spectrum--compact .tz-spectrum__labels { font-size:9.5px; }

  /* assessment */
  .tz-assess-top { display:flex; align-items:center; gap:26px; margin-bottom:20px; flex-wrap:wrap; }
  .tz-pillar-tabs { display:flex; flex-wrap:wrap; gap:8px; }
  .tz-tab { display:inline-flex; align-items:center; gap:6px; font-size:12.5px; font-weight:700; padding:7px 13px; border-radius:999px; border:1.5px solid var(--line); background:#fff; color:var(--ink-soft); cursor:pointer; font-family:inherit; }
  .tz-tab__dot { width:7px; height:7px; border-radius:50%; background:#C4CFDE; }
  .tz-tab--done { color:var(--good); border-color:#BFE3CF; background:#F1FAF5; }
  .tz-tab--active { border-color:var(--signal); color:var(--signal); background:var(--signal-wash); }
  .tz-tab:focus-visible { outline:3px solid var(--viz); outline-offset:1px; }
  .tz-question { border:none; border-top:1px solid var(--line); margin:22px 0 0; padding:22px 0 0; }
  .tz-question__text { font-size:16px; font-weight:700; color:var(--ink); margin-bottom:14px; padding:0; }
  .tz-question__num { color:var(--signal); font-size:13px; margin-right:6px; }
  .tz-options { display:flex; flex-direction:column; gap:8px; margin-top:12px; }
  .tz-option { display:flex; align-items:flex-start; gap:13px; text-align:left; width:100%; background:#FBFDFF; border:1.5px solid var(--line); border-radius:12px; padding:11px 14px; cursor:pointer; font-family:inherit; font-size:14px; color:#33435C; transition:border-color .12s, background .12s; }
  .tz-option:hover { border-color:#AFC0D4; }
  .tz-option:focus-visible { outline:3px solid var(--viz); outline-offset:1px; }
  .tz-option--selected { border-color:var(--signal); background:var(--signal-wash); box-shadow:0 0 0 1px var(--signal); }
  .tz-option__level { flex-shrink:0; width:26px; height:26px; border-radius:8px; display:grid; place-items:center; font-family:'IBM Plex Mono',monospace; font-weight:600; font-size:13px; color:#fff; margin-top:1px; }
  .tz-option__level--1 { background:#62788C; } .tz-option__level--2 { background:#3E9AC4; }
  .tz-option__level--3 { background:#18C8E8; } .tz-option__level--4 { background:#168BFF; }
  .tz-option__level--5 { background:#0066FF; }
  .tz-option__text { padding-top:2px; }
  .tz-evidence { margin-top:26px; border:1px dashed #B9CBDE; border-radius:14px; padding:18px 20px; background:#F6FAFE; }
  .tz-evidence__copy h4 { margin:0 0 4px; font-size:15px; color:var(--ink); }
  .tz-evidence__copy p { margin:0 0 12px; font-size:12.5px; color:var(--ink-soft); }
  .tz-evidence__opts { display:grid; grid-template-columns:repeat(4,1fr); gap:8px; }
  .tz-evidence__opt { display:flex; flex-direction:column; align-items:center; gap:2px; padding:9px 6px; border:1.5px solid var(--line); border-radius:10px; background:#fff; cursor:pointer; font-family:inherit; color:#33435C; font-size:11.5px; }
  .tz-evidence__opt b { font-size:14px; color:var(--ink); }
  .tz-evidence__opt--selected { border-color:var(--signal); background:var(--signal-wash); box-shadow:0 0 0 1px var(--signal); }
  .tz-evidence__opt:focus-visible { outline:3px solid var(--viz); outline-offset:1px; }

  /* generating */
  .tz-card--gen { max-width:560px; text-align:center; padding:44px 40px; }
  .tz-orb { width:64px; height:64px; margin:0 auto 18px; border-radius:50%; display:grid; place-items:center; color:#fff;
    background:linear-gradient(135deg,#18C8E8,#0066FF); animation:tz-pulse 1.8s ease-in-out infinite; }
  @keyframes tz-pulse { 0%,100% { box-shadow:0 0 0 0 rgba(0,102,255,.45);} 50% { box-shadow:0 0 0 18px rgba(0,102,255,0);} }
  .tz-gensteps { list-style:none; padding:0; margin:26px auto 0; max-width:420px; text-align:left; display:flex; flex-direction:column; gap:12px; }
  .tz-gensteps li { display:flex; align-items:center; gap:10px; font-size:14px; color:#9AA8BD; transition:color .3s; }
  .tz-gensteps li.active { color:var(--ink); font-weight:700; }
  .tz-gensteps li.done { color:var(--good); }
  .tz-genstep__dot { width:15px; height:15px; border-radius:50%; border:2px solid #C4CFDE; flex-shrink:0; }
  .tz-gensteps li.active .tz-genstep__dot { border-color:var(--signal); animation:tz-spin 1s linear infinite; border-top-color:transparent; }
  @keyframes tz-spin { to { transform:rotate(360deg);} }

  /* dial */
  .tz-dial { display:block; margin:0 auto; }
  .tz-dial--lg { width:210px; } .tz-dial--sm { width:140px; }
  .tz-dial__track { stroke:#D7E2ED; stroke-width:10; stroke-linecap:round; }
  .tz-dial__fill { stroke:var(--signal); stroke-width:10; stroke-linecap:round; }
  .tz-dial__tick { stroke:#A9B6C7; stroke-width:1.5; }
  .tz-dial__needle { stroke:#101820; stroke-width:2.5; }
  .tz-dial__hub { fill:#fff; stroke:#D7E2ED; stroke-width:1.5; }
  .tz-dial__value { font-family:'IBM Plex Mono',monospace; font-weight:600; fill:#101820; font-size:38px; }
  .tz-dial__label { font-family:'IBM Plex Mono',monospace; fill:#47586B; font-size:9.5px; letter-spacing:.06em; }
  .tz-dial--dark .tz-dial__track { stroke:rgba(255,255,255,.16); }
  .tz-dial--dark .tz-dial__fill { stroke:var(--viz); }
  .tz-dial--dark .tz-dial__tick { stroke:rgba(255,255,255,.3); }
  .tz-dial--dark .tz-dial__needle { stroke:#fff; }
  .tz-dial--dark .tz-dial__hub { fill:var(--panel-raised); stroke:rgba(255,255,255,.2); }
  .tz-dial--dark .tz-dial__value { fill:#fff; }
  .tz-dial--dark .tz-dial__label { fill:var(--signal-soft); }

  /* results */
  .tz-result-toolbar { display:flex; justify-content:space-between; align-items:center; gap:14px; margin-bottom:18px; flex-wrap:wrap; }
  .tz-backlink { display:inline-flex; align-items:center; gap:7px; background:none; border:none; color:var(--ink-soft); font-family:inherit; font-size:13.5px; font-weight:600; cursor:pointer; padding:6px 2px; }
  .tz-backlink:hover { color:var(--signal); }
  .tz-results-hero { background:radial-gradient(900px 400px at 90% -20%, rgba(0,102,255,.4), transparent 60%), var(--panel);
    color:#fff; border-radius:20px; padding:34px 38px; margin-bottom:22px; display:flex; gap:34px; align-items:center; flex-wrap:wrap; }
  .tz-results-hero__gauge { flex:0 0 220px; }
  .tz-results-hero__title { font-size:clamp(26px,3.4vw,38px); margin:8px 0 8px; line-height:1.15; color:#fff; }
  .tz-results-hero__sub { color:var(--ink-faint); margin:0 0 14px; max-width:56ch; }
  .tz-results-hero__meta { display:flex; flex-wrap:wrap; gap:8px 18px; font-size:12.5px; color:#8FA0B8; }
  .tz-results-hero__meta span { border-left:2px solid rgba(255,255,255,.2); padding-left:10px; }
  .tz-autodl { font-size:12.5px; color:#8FA0B8; margin:14px 0 0; }
  .tz-kpis { display:grid; grid-template-columns:repeat(auto-fit,minmax(210px,1fr)); gap:14px; margin-bottom:22px; }
  .tz-kpi { background:var(--card); border:1px solid var(--line); border-radius:16px; padding:16px 18px; }
  .tz-kpi span { font-size:10.5px; letter-spacing:.12em; color:var(--ink-soft); font-weight:600; }
  .tz-kpi strong { display:block; font-size:27px; color:var(--ink); margin:4px 0 2px; font-family:'Fraunces',serif; }
  .tz-kpi__small { font-size:19px !important; }
  .tz-kpi p { margin:0; font-size:12px; color:#7B8BA1; }
  .tz-profilegrid { display:grid; grid-template-columns:1fr 1fr; gap:26px; align-items:center; margin-top:8px; }
  .tz-radarwrap { min-width:0; }
  .tz-radar { width:100%; height:auto; }
  .tz-scorecard { display:flex; flex-direction:column; gap:11px; margin-bottom:20px; }
  .tz-scorecard__row { display:grid; grid-template-columns:96px 1fr 44px; align-items:center; gap:12px; }
  .tz-scorecard__name { font-weight:700; font-size:13.5px; color:var(--ink); }
  .tz-scorecard__bar { height:10px; border-radius:99px; background:#E8EFF7; overflow:hidden; }
  .tz-scorecard__bar div { height:100%; border-radius:99px; background:var(--grad); transition:width .5s ease; }
  .tz-scorecard__val { font-size:13px; font-weight:600; text-align:right; }

  .tz-bench { display:grid; grid-template-columns:repeat(auto-fit,minmax(210px,1fr)); gap:14px; }
  .tz-bench__tile { border:1px solid var(--line); border-radius:14px; padding:16px 18px; background:#FBFDFF; display:flex; flex-direction:column; gap:5px; align-items:flex-start; }
  .tz-bench__value { font-size:26px; font-weight:600; color:var(--ink); }
  .tz-bench__label { font-size:13px; font-weight:700; color:#44536B; }
  .tz-bench__range { font-family:'IBM Plex Mono',monospace; font-size:11.5px; color:#7B8BA1; }
  .tz-bench__note { font-size:12.5px; color:var(--ink-soft); margin:4px 0 0; }

  /* triad */
  .tz-triad { display:grid; grid-template-columns:repeat(3,1fr); gap:16px; margin-top:14px; }
  .tz-col { border:1px solid var(--line); border-radius:14px; padding:16px 18px; background:#FBFDFF; }
  .tz-col__head { display:flex; align-items:center; gap:8px; font-size:11px; letter-spacing:.12em; font-weight:600; margin-bottom:8px; }
  .tz-col--strength .tz-col__head { color:var(--good); }
  .tz-col--challenge .tz-col__head { color:var(--warn); }
  .tz-col--priority .tz-col__head { color:var(--signal); }
  .tz-col h4 { margin:0 0 10px; font-size:15px; color:var(--ink); font-family:'Fraunces',serif; }
  .tz-insights { display:flex; flex-direction:column; gap:10px; }
  .tz-insight b { display:block; font-size:13.5px; color:var(--ink); }
  .tz-insight span { font-size:12.5px; color:var(--ink-soft); }

  /* pillar detail & tables */
  .tz-detail { border:1px solid var(--line); border-radius:13px; padding:0 18px; margin-bottom:10px; background:#FBFDFF; }
  .tz-detail summary { cursor:pointer; font-family:'Fraunces',serif; font-weight:600; font-size:15.5px; color:var(--ink); padding:14px 0; list-style-position:inside; }
  .tz-detail[open] { padding-bottom:16px; }
  .tz-accent-b { color:var(--signal); } .tz-accent-c { color:#0E8CA6; }
  .tz-label { font-size:11.5px; font-weight:700; letter-spacing:.1em; text-transform:uppercase; margin:14px 0 4px; }
  .tz-label--amber { color:var(--warn); } .tz-label--green { color:var(--good); }
  .tz-ul { margin:2px 0 4px; padding-left:20px; font-size:14.5px; }
  .tz-ul li { margin:4px 0; }
  .tz-ul--check { list-style:none; padding-left:2px; }
  .tz-ul--check li { display:flex; gap:9px; align-items:flex-start; }
  .tz-ul--check svg { color:var(--good); flex-shrink:0; margin-top:3px; }
  .tz-services-line { font-size:12.5px; color:var(--ink-soft); margin:10px 0 0; }
  .tz-tablewrap { overflow-x:auto; }
  .tz-trend { width:100%; border-collapse:collapse; font-size:13.5px; }
  .tz-trend th { text-align:left; color:var(--ink-soft); font-weight:600; padding:6px 14px 8px 0; border-bottom:1px solid var(--line); }
  .tz-trend td { padding:9px 14px 9px 0; border-bottom:1px solid #EAF0F7; vertical-align:top; }
  .tz-pill { display:inline-block; font-size:11.5px; font-weight:700; padding:3px 10px; border-radius:999px; white-space:nowrap; }
  .tz-pill--ahead { background:var(--good-wash); color:var(--good); }
  .tz-pill--aligned { background:var(--signal-wash); color:var(--signal); }
  .tz-pill--needs { background:var(--risk-wash); color:var(--risk); }

  .tz-twocol { display:grid; grid-template-columns:1fr 1fr; gap:22px; }
  .tz-twocol .tz-card { margin-bottom:22px; }
  .tz-impact { display:flex; flex-direction:column; gap:12px; }
  .tz-impact span { font-size:11.5px; font-weight:700; letter-spacing:.1em; text-transform:uppercase; color:#7B8BA1; }
  .tz-impact p { margin:2px 0 0; font-size:14px; }
  .tz-roadmap { display:grid; grid-template-columns:repeat(3,1fr); gap:18px; }
  .tz-phase { border-left:3px solid var(--signal); padding-left:16px; }
  .tz-phase__name { font-size:12.5px; color:var(--signal); font-weight:600; margin:0 0 4px; }
  .tz-phase__focus { font-weight:700; margin:0 0 6px; color:var(--ink); font-size:14.5px; }

  /* next step */
  .tz-nextstep { background:linear-gradient(120deg,var(--panel),var(--panel-raised)); color:#DCE9F7; border-radius:20px; padding:30px 34px; display:flex; align-items:center; justify-content:space-between; gap:26px; flex-wrap:wrap; }
  .tz-nextstep h3 { color:#fff; margin:6px 0 8px; font-size:22px; }
  .tz-nextstep p { margin:0 0 14px; max-width:64ch; font-size:14.5px; color:var(--ink-faint); }
  .tz-nextstep p b { color:#fff; }
  .tz-journey { display:flex; flex-wrap:wrap; gap:8px; align-items:center; font-size:10.5px; letter-spacing:.12em; color:var(--signal-soft); }
  .tz-journey i { font-style:normal; color:rgba(255,255,255,.4); }
  .tz-nextstep__actions { display:flex; flex-direction:column; gap:10px; }
  .tz-disclaimer { font-size:12px; color:#7B8BA1; margin:16px 4px 0; }

  .tz-footer { background:var(--panel); color:#8FA0B8; font-size:12px; padding:16px 28px; display:flex; justify-content:space-between; gap:12px; flex-wrap:wrap; margin-top:auto; }
  .tz-footer__brand { display:inline-flex; align-items:center; gap:10px; }
  .tz-footer__brand img { height:15px; opacity:.9; }

  /* Teams booking modal */
  .tz-modal-overlay { position:fixed; inset:0; background:rgba(7,20,38,.62); display:flex; align-items:center; justify-content:center; z-index:60; padding:20px; }
  .tz-modal { background:#fff; border-radius:20px; max-width:660px; width:100%; padding:28px 30px; max-height:90vh; overflow:auto; box-shadow:0 24px 60px rgba(7,20,38,.4); position:relative; }
  .tz-modal__close { position:absolute; top:14px; right:14px; background:var(--paper); border:none; border-radius:999px; width:34px; height:34px; display:grid; place-items:center; cursor:pointer; color:var(--ink-soft); }
  .tz-modal__close:hover { color:var(--ink); }
  .tz-modal__close:focus-visible { outline:3px solid var(--viz); outline-offset:1px; }
  .tz-consultants { display:flex; flex-direction:column; gap:12px; margin-top:18px; }
  .tz-consultant { display:flex; gap:14px; align-items:center; border:1px solid var(--line); border-radius:14px; padding:14px 16px; flex-wrap:wrap; background:#FBFDFF; }
  .tz-consultant__avatar { width:46px; height:46px; border-radius:50%; background:linear-gradient(135deg,#18C8E8,#0066FF); color:#fff; display:grid; place-items:center; font-weight:800; font-size:15px; flex-shrink:0; }
  .tz-consultant__info { flex:1; min-width:200px; }
  .tz-consultant__info strong { display:block; font-size:14.5px; color:var(--ink); }
  .tz-consultant__info span { font-size:12.5px; color:var(--ink-soft); display:block; }
  .tz-consultant__meta { font-size:10.5px !important; color:#7B8BA1 !important; letter-spacing:.04em; margin-top:2px; }
  .tz-btn--sm { padding:9px 15px; font-size:13px; }
  .tz-modal__foot { margin-top:16px; font-size:12.5px; color:#7B8BA1; }
  .tz-modal__foot a { color:var(--signal); font-weight:700; text-decoration:none; display:inline-flex; align-items:center; gap:4px; }

  @media (max-width: 920px) {
    .tz-hero { grid-template-columns:1fr; padding:44px 22px 52px; gap:30px; }
    .tz-hero__inner { margin-left:0; }
    .tz-hero__panel { max-width:420px; }
    .tz-profilegrid { grid-template-columns:1fr; }
    .tz-triad { grid-template-columns:1fr; }
    .tz-twocol { grid-template-columns:1fr; }
    .tz-roadmap { grid-template-columns:1fr; }
    .tz-results-hero { padding:28px 24px; }
    .tz-results-hero__gauge { flex:0 0 auto; }
  }
  @media (max-width: 760px) {
    .tz-formgrid--three { grid-template-columns:repeat(2,1fr); }
    .tz-evidence__opts { grid-template-columns:repeat(2,1fr); }
  }
  @media (max-width: 620px) {
    .tz-formgrid { grid-template-columns:1fr; }
    .tz-formgrid--three { grid-template-columns:1fr; }
    .tz-card { padding:22px 18px; }
    .tz-header__product { display:none; }
    .tz-actions { flex-direction:column-reverse; align-items:stretch; }
    .tz-actions .tz-btn { justify-content:center; }
    .tz-proof { gap:8px 24px; }
  }
  @media (prefers-reduced-motion: reduce) {
    .tz-orb, .tz-gensteps li.active .tz-genstep__dot { animation:none; }
    .tz-spectrum__marker, .tz-progressbar div, .tz-scorecard__bar div { transition:none; }
  }
  `}</style>
);
