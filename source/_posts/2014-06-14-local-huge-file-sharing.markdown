---
layout: post
title: "Local Huge File Sharing"
date: 2014-06-14 13:38:56 +0800
comments: true
categories: Git
---

Objective
---

To share files of several gigabytes (GBs) *locally* between two
computers.

Usual ways
---

- Cloud storage (e.g. [Dropbox], [Google Drive])
    - *Inefficient* for slow Internet connection
    - *Limited* file size in an upload
- USB storage devices (an example of [Sneakernet])
    - Need to copy the file *twice*

<!-- more -->

Technology that I used
---

Connect the two computers using a LAN cable.

Reasons:

- Unlimited sharing of data
- Fast data transfer: the bandwidth *isn't* limited by ISPs.

Following [the instructions from *AN0NYM0U5*][2win7], one should be
able to set up a "connection" between two Windows 7 computers.  I just
highlight some important configurations to be done in Windows 7's
Network and Sharing Center.

1. Connect the 2 machines through a LAN cable.
2. Ensure that the file access rights are properly set.
3. Set the properties of the "**Local Area Connection**" →
"**...IPv4**".
4. Set the values according to the table below.

    |                 | First computer | Second computer |
    | :-------------- | -------------: | --------------: |
    | IP address      | 192.168.1.1    | 192.168.1.3     |
    | Subnet mask[^1] | 255.255.255.0  | 255.255.255.0   |
    | Default gateway | 192.168.1.3    | 192.168.1.1     |

Observations:

1. The IP addresses for both computers should start with "192.168.",
which stands for private network, and they should be *different*.
2. The computers in the connection should share the *same* subnet
masks.
3. The default gateway for each computer should be the IP address of
the other computer.

#### Sample screenshot

![Windows 7 IP settings][Win7SetIPScrShot]  
<small>The IPv4 properties for the second computer.</small>

Remarks: The above steps is for Windows 7 *only*.[^2]

**How about setting up a connection between Linux and Windows?**

### Connection between Windows and Linux

1. Do the above network configurations on Windows 7.
    - I will treat my Linux desktop as my first computer, and my
	Windows 7 laptop as my second one.
2. Install openssh-server on Linux.[^3]

    <pre class="cli"><code class="ubuntu_gnome_terminal">$ sudo apt-get install openssh-server</code></pre>

3. Do some of the following settings on Linux.

Remarks: These steps should be done *efficiently*.

#### Using GUI on Ubuntu

It's quite easy to set up the connection with Ubuntu's Network
Manager.

![Ubuntu IP settings][UbuntuSetIPScrShot]

The route settings (the button with "(R)") can be left out.

#### Using the terminal

It's possible that the layout of GUI tools changes from time to time,
but unlikely for commands.  Moreover, a Linux computer does *not*
necessarily has a desktop.  Therefore, the commands are worth
learning.

<ol>
    <li>
    <p>Change IP addresses in both machines.
    (<a title="Linux Change IP Address" href="http://www.cyberciti.biz/faq/linux-change-ip-address/">Instructions on nixCraft</a>)</p>
    <p>Command</p>
    <pre class="cli"><code class="ubuntu_gnome_terminal">$ ifconfig eth0 192.168.1.1 [netmask 255.255.255.0 up]</code></pre>
    <p>If the net mask is omitted, it will be automatically set.  It
    <em>can't</em> be arbitrarily set.  If <code>eth0</code> is
    already <code>up</code>, then the last word can be omitted.</p>
    <p>Output</p>
    <pre class="cli"><code class="ubuntu_gnome_terminal"># ifconfig eth0
eth0      Link encap:Ethernet  HWaddr b8:ac:6f:db:d1:0c
          <span class="ubuntu_hl_code">inet addr:192.168.1.1  Bcast:192.168.1.255  Mask:255.255.255.0</span>
          inet6 addr: fe80::baac:6fff:fedb:d10c/64 Scope:Link
         UP BROADCAST RUNNING MULTICAST  MTU:8000  Metric:1
          RX packets:36250 errors:0 dropped:17 overruns:0 frame:0
          TX packets:27619 errors:0 dropped:0 overruns:0 carrier:0
          collisions:0 txqueuelen:1000
          RX bytes:29592391 (29.5 MB)  TX bytes:4441266 (4.4 MB)
          Interrupt:42 Base address:0xe000</code></pre>
    </li>
    <li>
    <p>Set the default gateway.  (<a title="Linux Setup Default Gateway with Route Command" href="http://www.cyberciti.biz/faq/linux-setup-default-gateway-with-route-command/">Instructions on nixCraft</a>)</p>
    <p>Command</p>
    <pre class="cli"><code class="ubuntu_gnome_terminal"># route add default gw 192.168.1.3 eth0</code></pre>
    <p>Output</p>
    <pre class="cli"><code class="ubuntu_gnome_terminal">$ route -n
Kernel IP routing table
Destination     Gateway         Genmask         Flags Metric Ref    Use Iface
0.0.0.0         192.168.1.3     0.0.0.0         UG    0      0        0 eth0
169.254.0.0     0.0.0.0         255.255.0.0     U     1000   0        0 eth0
192.168.1.0     0.0.0.0         255.255.255.0   U     1      0        0 eth0
</code></pre>
    </li>
</ol>

Note:

- The changed network settings can *disappear* if one does it slowly.
- If the default gateway *isn't* set, one can still connect the two
    computers.  However, I observed that such a connection *isn't* so
    stable.
- The connection established through Ubuntu's Network Manager
    *doesn't* have such problem.

If a local area connection has been set up successfully, one should
see an active network in Windows 7's Network and Sharing Center.

{% imgpopup /images/posts/LAN/Network6.png 100% Windows 7's network information %}

### Remote login via SSH

Before actually using SSH, one can using the following commands to
check if the remote server is up.  For more details, such as the
number of packets sent to the remote machine, check it elsewhere like
the command's manpage or the Internet.

<pre class="cli"><code class="ubuntu_gnome_terminal">$ ping [host] # send some packets to `host'
$ nmap [host] # detect which ports are open
</code></pre>

At first, I tried `ssh 192.168.1.1`, and was prompted to input my
password.  Unfortunately, I *overlooked the user name*.  Even though I
repeatedly input the *correct* password, my Ubuntu computer *denied*
my "remote" access via SSH.

![Wrong username][WrongSSH]

I recalled that *nix terminal are *case sensitive*, unlike Window's
Command Prompt.  Therefore, specifying the appropriate user name and
password at the remote host, the SSH connection should be set up.

![Successful SSH connection][TrueSSH]

### File sharing via SCP

To save time and effort, I just include two links for interested
readers.

1. A brief summary of the usage of `scp` on Indiana University
Knowledge Base ([URL][scp1])
    - `~` can be used after `user@host:` to indicate the home folder.
2. More examples of SCP commands. ([URL][scp2])

### Using Git

According to [the official manual][GitMan], SSH paths are supported by
the SCM.  For example, to copy a Git repository called `myproj` from a
Linux machine, I can use the following command.

<pre class="cli"><code class="ubuntu_gnome_terminal">$ git clone ssh://owner@192.168.1.1/~/myproj</code></pre>

One can perform a Git fetch more quickly after adding the SSH path of
the Git repository on the "remote" machine into the list of remote
repositories.

<pre class="cli"><code class="ubuntu_gnome_terminal">$ git remote add ubuntu_desktop ssh://owner@192.168.1.1/~/myproj
$ git fetch ubuntu_desktop [branch]
</code></pre>

However, `git push` to remote machines will fail if the remote
repository being "pushed" is non-bare.  Either setting up a bare
repository at the "remote" *nix computer or pushing the branch will
solve the problem.[^4]

---

[^1]: As can be seen from the contents below, I aim at setting up a connection between Windows and Linux, on which the subnet mask *can't* be set to "225.225.225.0".
[^2]: See another post on the same topic on wikiHow. ([URL][wikiHow])
[^3]: I learnt it from [Ask Ubuntu].
[^4]: A question on Stack Overflow ([URL][StackOverflow2816369])

[Dropbox]: https://www.dropbox.com
[Google Drive]: https://drives.google.com
[Sneakernet]: http://en.wikipedia.org/wiki/Sneakernet
[2win7]: http://an0nym0u5-hakerx.blogspot.hk/2012/10/connect-pc-to-pc-lan-cable.html "Connect PC to PC LAN Cable"
[Win7SetIPScrShot]: /images/posts/LAN/Win7IPSettings.png "Windows 7 IP Settings—Screenshot"
[wikiHow]: http://www.wikihow.com/Make-Your-Own-Ethernet-Cable-and-Set-up-a-Network-Between-Two-Laptops-Using-Ethernet-Cable#Warnings "How to Make Your Own Ethernet Cable and Set up a Network Between Two Laptops Using Ethernet Cable"
[UbuntuSetIPScrShot]: /images/posts/LAN/NetMgrSettings.png "Ubuntu 12.04 LTS IP Settings—Screenshot"
[Ask Ubuntu]: http://askubuntu.com/a/107218 "A Quick Way To Transfer files From Ubuntu To Windows"
[WrongSSH]: /images/posts/LAN/GitBashSSH.png "Wrong user name"
[TrueSSH]: /images/posts/LAN/ViaSSH.png "Successful SSH connection"
[scp1]: https://kb.iu.edu/d/agye "SCP in Unix"
[scp2]: http://www.tecmint.com/scp-commands-examples/ "10 SCP Commands to Transfer Files/Folders in Linux"
[GitMan]: http://git-scm.com/docs/git-clone#_git_urls "Git URLs"
[StackOverflow2816369]: http://stackoverflow.com/questions/2816369/ "Git push error '[remote rejected] master -> master (branch is currently checked out)'"

*[ISPs]: Internet Service Providers
*[SSH]: Secure Shell
*[SCP]: Secure Copy
