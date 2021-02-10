
# This code runs the following awk to get a window id for the currently active X11 window
# xwininfo -id $(xprop -root | awk '/_NET_ACTIVE_WINDOW\(WINDOW\)/{print $NF}')

# ffmpeg -video_size $resolution -framerate 25 -f x11grab 
#        -i :0.0+originX,originY -f alsa -ac 2 -i pulse capture.mp4

# Note: This code always captures the terminal where python script is running

# To do: we need to allow for the user to select a window to grab

import subprocess

def capture():
	origin, resolution = getWindowGeometry()
	originScreen = ':0.0+' + origin[0] + ',' + origin[1]
 	cmd = ['ffmpeg','-video_size',resolution,'-framerate','25', 
 	       '-f','x11grab','-i',originScreen,'-f',
 	       'alsa','-ac','2','-i','pulse','capture.mp4']
 	cmd = map(lambda x: str(x), cmd)
	subprocess.call(cmd)

def getWindowGeometry():
	info = py_xwininfo()
	valid_info = []
	winDict = {}
	for item in info.split('\n'):
		if item.count(':') == 1:
			(key, value) = item.split(':')
			winDict[key.strip()] = value.strip()

	origin = []
	origin.append(winDict['Absolute upper-left X'])
	origin.append(winDict['Absolute upper-left Y'])

	width = winDict['Width'] 
	height = winDict['Height']
	if int(width) % 2 != 0:
		width = int(width) + 1
	if int(height) % 2 != 0:
		height = int(height) + 1
	resolution = str(width) + 'x' + str(height)

	return origin, resolution

def py_xwininfo():
	winId = getCurrentWinId()
	cmd = ['xwininfo','-id', winId]
	cmd = map(lambda x: str(x), cmd)
	p = subprocess.Popen(cmd, stdout = subprocess.PIPE)

	return p.communicate()[0]

def getCurrentWinId():
	cmd_1 = ['xprop', '-root']
	cmd_2 = ['awk', '/_NET_ACTIVE_WINDOW\(WINDOW\)/{print $NF}']
	p1 = subprocess.Popen(cmd_1, stdout = subprocess.PIPE)
	p2 = subprocess.Popen(cmd_2, stdin = p1.stdout, stdout=subprocess.PIPE)
	id = p2.communicate()[0]

	return id

if __name__ == '__main__':
	origin, resolution = getWindowGeometry()
	print 'resolution = %s' %resolution
	print 'origin = %s' %origin

	capture()


