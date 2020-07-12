
sec02=02_internet.Rmd
sec02:
	        R -e "library(rmarkdown); render('$(sec02)', 'html_document')"
clean:
	        \rm -rf *.log *.nav *.aux *.tex *.out *.snm *.toc *.vrb *.bbl


