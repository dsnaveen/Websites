






import pandas as pd
from sklearn.metrics.pairwise import cosine_distances
from sklearn.cluster import AgglomerativeClustering


if __name__ == '__main__':

	file_path = '../data/docword.kos.txt'
	col_names = ['docId', 'wordId', 'count']
	D = pd.read_csv(file_path, skiprows=3, sep = ' ', header=None, names = col_names)#, nrows = 5000)

	print D.head(7)
	print len(D)

	P = pd.pivot_table(D, values = ['count'], index = ['docId'], columns = ['wordId']).fillna(0)
	print P.head(7)

	#Distance matrix to etimate doc similarities...	
	S = cosine_distances(P)
	print S.shape
	print S

	#Hierarchical clutering upto level 2 to find tructure among the document...
	A = AgglomerativeClustering(n_clusters = 2, affinity = 'cosine', linkage = 'average').fit(P)
	print A

	from scipy.cluster.hierarchy import dendogram, linkage
	Z = linkage(P)
	print dendogram(Z)

